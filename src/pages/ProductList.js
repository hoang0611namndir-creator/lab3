import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar.js';
import CategoryFilter from '../components/CategoryFilter.js';
import Pagination from '../components/Pagination.js';

const ITEMS_PER_PAGE = 5;

export default function ProductList({ products}) {
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

  // 1. Lọc theo tìm kiếm và thể loại
  const filteredMovies = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = filter === 'all' || product.category.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesGenre;
  });

  // 2. Sắp xếp
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortBy === 'title-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'title-desc') return b.name.localeCompare(a.name);
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'price-asc') return a.price - b.price;
    return a.id - b.id;
  });

  // 3. Phân trang (mỗi trang chứa 5 movie)
  const totalPages = Math.ceil(sortedMovies.length / ITEMS_PER_PAGE);
  const currentPage = totalPages > 0 ? Math.min(rawPage, totalPages) : 1;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMovies = sortedMovies.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 24px',
    width: '100%',
    boxSizing: 'border-box'
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
    
  };

  const statsBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '8px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px'
  };

  const emptyStateStyle = {
    textAlign: 'center',
    padding: '48px 24px',
    borderRadius: '12px',
   
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '800', margin: '0 0 8px 0', color:  '#f8fafc' }}>
          Danh Sách Phim
        </h1>
        <p style={{ margin: 0, fontSize: '15px', color:  '#94a3b8'  }}>
          Khám phá danh sách sản phẩm với tính năng tìm kiếm (useSearchParams), phân loại, sắp xếp và phân trang (5 sp/trang).
        </p>
      </div>

      {/* Mục tìm kiếm và sắp xếp đặt trong mục Movie */}
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
          <span>Tìm thấy <strong>{sortedMovies.length}</strong> phim phù hợp</span>
          {sortedMovies.length > 0 && (
            <span> (Hiển thị trang {currentPage} / {totalPages})</span>
          )}
        </div>
        <div>
          <span>Tổng số phim: <strong>{products.length}</strong></span>
          <span style={{ margin: '0 8px' }}>|</span>
        </div>
      </div>

      {/* Danh sách phim dạng Card */}
      {currentMovies.length > 0 ? (
        <div style={gridStyle}>
          {currentMovies.map((product) => (
            <productItem
              key={product.id}
              prouct={product}
            />
          ))}
        </div>
      ) : (
        <div style={emptyStateStyle}>
          <div style={{ fontSize: '36px', marginBottom: '12px' }}>🎬</div>
          <h3 style={{ margin: '0 0 8px 0', color: '#f8fafc' }}>
            Không tìm thấy sản phẩm nào
          </h3>
          <p style={{ margin: 0 }}>
            Không có sản phẩm nào khớp với từ khóa "{search}" hoặc thể loại "{filter}". Hãy thử tìm kiếm lại.
          </p>
        </div>
      )}

      {/* Phân trang dưới mỗi trang thuộc mục Movie */}
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
