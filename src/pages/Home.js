import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBoxOpen, FaLayerGroup, FaTags } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext.js';
import ProductItem from '../components/ProductItem.js';

export default function Home({ products = [] }) {
  const { darkMode } = useTheme();

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '48px 24px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const heroSectionStyle = {
    textAlign: 'center',
    padding: '48px 24px',
    borderRadius: '16px',
    backgroundColor: darkMode ? '#1e293b' : '#ffffff',
    border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
    boxShadow: darkMode ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
    marginBottom: '48px'
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: '800',
    marginBottom: '16px',
    letterSpacing: '-0.5px',
    color: darkMode ? '#f8fafc' : '#0f172a'
  };

  const subtitleStyle = {
    fontSize: '18px',
    maxWidth: '650px',
    margin: '0 auto 28px auto',
    lineHeight: '1.6',
    color: darkMode ? '#94a3b8' : '#64748b'
  };

  const ctaButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 28px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#0284c7',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(2, 132, 199, 0.35)',
    transition: 'all 0.2s ease'
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginBottom: '48px'
  };

  const statCardStyle = {
    padding: '24px',
    borderRadius: '12px',
    backgroundColor: darkMode ? '#1e293b' : '#ffffff',
    border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
    textAlign: 'center',
    boxShadow: darkMode ? '0 2px 4px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.04)'
  };

  // Lấy các danh mục duy nhất
  const categories = Array.from(new Set(products.map(p => p.category)));
  // Lấy một số sản phẩm nổi bật
  const featuredProducts = products.slice(0, 3);

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <h1 style={titleStyle}>Chào mừng đến với ProductStore</h1>
        <p style={subtitleStyle}>
          Hệ thống quản lý và khám phá các sản phẩm công nghệ hiện đại. Tìm kiếm, lọc theo thể loại, sắp xếp giá và phân trang linh hoạt.
        </p>
        <Link
          to="/products"
          style={ctaButtonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0369a1')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0284c7')}
        >
          <span>Khám phá sản phẩm ngay</span>
          <FaArrowRight />
        </Link>
      </section>

      {/* Stats Section */}
      <div style={statsGridStyle}>
        <div style={statCardStyle}>
          <div style={{ fontSize: '32px', color: '#0284c7', marginBottom: '8px' }}>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '800', color: darkMode ? '#f8fafc' : '#0f172a' }}>
            {products.length}
          </div>
          <div style={{ fontSize: '14px', color: darkMode ? '#94a3b8' : '#64748b' }}>
            Tổng số sản phẩm
          </div>
        </div>

        <div style={statCardStyle}>
          <div style={{ fontSize: '32px', color: '#10b981', marginBottom: '8px' }}>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '800', color: darkMode ? '#f8fafc' : '#0f172a' }}>
            {categories.length}
          </div>
          <div style={{ fontSize: '14px', color: darkMode ? '#94a3b8' : '#64748b' }}>
            Danh mục sản phẩm
          </div>
        </div>

        <div style={statCardStyle}>
          <div style={{ fontSize: '32px', color: '#f59e0b', marginBottom: '8px' }}>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '800', color: darkMode ? '#f8fafc' : '#0f172a' }}>
            3 / trang
          </div>
          <div style={{ fontSize: '14px', color: darkMode ? '#94a3b8' : '#64748b' }}>
            Hỗ trợ phân trang chuẩn
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '700',
            margin: 0,
            color: darkMode ? '#f8fafc' : '#0f172a'
          }}>
            Sản phẩm tiêu biểu
          </h2>
          <Link
            to="/products"
            style={{
              color: '#0284c7',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>Xem tất cả</span>
            <FaArrowRight style={{ fontSize: '12px' }} />
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {featuredProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
