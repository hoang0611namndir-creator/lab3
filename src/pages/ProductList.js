import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar.js';
import CategoryFilter from '../components/CategoryFilter.js';
import Pagination from '../components/Pagination.js';
import ProductItem from '../components/ProductItem.js';
import { useTheme } from '../context/ThemeContext.js';
import { FaBoxOpen } from 'react-icons/fa';

const ITEMS_PER_PAGE = 3;

export default function ProductList({ products = [] }) {
  const { darkMode } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  // Đọc các giá trị từ URL Search Params (sử dụng useSearchParams)
  const search = searchParams.get('q') || '';
  const filter = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'default';
  const pageParam = parseInt(searchParams.get('page') || '1', 10);
  const rawPage = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

  // Hàm cập nhật URL Search Params
  const updateParams = (newParams) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(newParams).forEach(([key, value]) => {
      if (
        value === undefined ||
        value === null ||
        value === '' ||
        (key === 'category' && value === 'all') ||
        (key === 'sort' && value === 'default') ||
        (key === 'page' && value === 1)
      ) {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });

    setSearchParams(params);
  };

  const handleSearchChange = (val) => {
    updateParams({ q: val, page: 1 });
  };

  const handleFilterChange = (val) => {
    updateParams({ category: val, page: 1 });
  };

  const handleSortChange = (val) => {
    updateParams({ sort: val, page: 1 });
  };

  const handlePageChange = (newPage) => {
    updateParams({ page: newPage });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 1. Lọc theo tìm kiếm và danh mục
  const filteredProducts = products.filter((product) => {
    const name = product.name || product.title || '';
    const matchesSearch = name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filter === 'all' || product.category.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // 2. Sắp xếp
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const nameA = a.name || a.title || '';
    const nameB = b.name || b.title || '';
    if (sortBy === 'title-asc') return nameA.localeCompare(nameB, 'vi');
    if (sortBy === 'title-desc') return nameB.localeCompare(nameA, 'vi');
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'price-asc') return a.price - b.price;
    return a.id - b.id;
  });

  // 3. Phân trang (mỗi trang chứa 5 sản phẩm)
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const currentPage = totalPages > 0 ? Math.min(rawPage, totalPages) : 1;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 24px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const headerTitleStyle = {
    fontSize: '28px',
    fontWeight: '800',
    margin: '0 0 8px 0',
    color: darkMode ? '#f8fafc' : '#0f172a'
  };

  const headerSubtitleStyle = {
    margin: 0,
    fontSize: '15px',
    color: darkMode ? '#94a3b8' : '#64748b'
  };

  const controlsBarStyle = {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: darkMode ? '#1e293b' : '#ffffff',
    border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
    boxShadow: darkMode ? '0 2px 4px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.05)'
  };

  const statsBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '8px',
    color: darkMode ? '#94a3b8' : '#64748b'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px'
  };

  const emptyStateStyle = {
    textAlign: 'center',
    padding: '60px 24px',
    borderRadius: '12px',
    backgroundColor: darkMode ? '#1e293b' : '#ffffff',
    border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
    color: darkMode ? '#94a3b8' : '#64748b'
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={headerTitleStyle}>
          Danh Sách Sản Phẩm
        </h1>
        <p style={headerSubtitleStyle}>
          Khám phá danh sách sản phẩm với tính năng tìm kiếm (useSearchParams), phân loại theo danh mục, sắp xếp và phân trang ({ITEMS_PER_PAGE} sản phẩm / trang).
        </p>
      </div>

      {/* Mục tìm kiếm và sắp xếp */}
      <div style={controlsBarStyle}>
        <SearchBar search={search} onSearchChange={handleSearchChange} />
        <CategoryFilter
          filter={filter}
          onFilterChange={handleFilterChange}
          sortBy={sortBy}
          onSortChange={handleSortChange}
        />
      </div>

      {/* Thống kê */}
      <div style={statsBarStyle}>
        <div>
          <span>Tìm thấy <strong>{sortedProducts.length}</strong> sản phẩm phù hợp</span>
          {sortedProducts.length > 0 && (
            <span> (Hiển thị trang {currentPage} / {totalPages})</span>
          )}
        </div>
        <div>
          <span>Tổng số sản phẩm: <strong>{products.length}</strong></span>
        </div>
      </div>

      {/* Danh sách sản phẩm dạng Card */}
      {currentProducts.length > 0 ? (
        <div style={gridStyle}>
          {currentProducts.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div style={emptyStateStyle}>
          <div style={{ fontSize: '42px', marginBottom: '12px' }}>
            <FaBoxOpen style={{ color: darkMode ? '#64748b' : '#94a3b8' }} />
          </div>
          <h3 style={{ margin: '0 0 8px 0', color: darkMode ? '#f8fafc' : '#0f172a' }}>
            Không tìm thấy sản phẩm nào
          </h3>
          <p style={{ margin: 0 }}>
            Không có sản phẩm nào khớp với từ khóa "{search}" {filter !== 'all' ? `hoặc danh mục "${filter}"` : ''}. Hãy thử tìm kiếm lại.
          </p>
        </div>
      )}

      {/* Phân trang */}
      {totalPages > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
