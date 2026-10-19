import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaTag, FaBoxOpen, FaInfoCircle } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext.js';

export default function ProductDetail({ products = [] }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const productID = parseInt(id, 10);
  const product = products.find((m) => m.id === productID);

  const containerStyle = {
    maxWidth: '800px',
    margin: '32px auto',
    padding: '0 20px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const backButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 18px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '24px',
    border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
    backgroundColor: darkMode ? '#1e293b' : '#ffffff',
    color: darkMode ? '#f8fafc' : '#334155',
    transition: 'all 0.2s ease',
    boxShadow: darkMode ? '0 2px 4px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.05)'
  };

  const cardStyle = {
    borderRadius: '16px',
    padding: '36px',
    backgroundColor: darkMode ? '#1e293b' : '#ffffff',
    border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
    boxShadow: darkMode ? '0 8px 16px -2px rgba(0, 0, 0, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.05)'
  };

  const titleRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '20px'
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: '800',
    margin: 0,
    color: darkMode ? '#f8fafc' : '#0f172a'
  };

  const badgeStyle = {
    display: 'inline-block',
    fontSize: '13px',
    fontWeight: '600',
    padding: '5px 14px',
    borderRadius: '9999px',
    backgroundColor: darkMode ? '#334155' : '#e0f2fe',
    color: darkMode ? '#38bdf8' : '#0369a1'
  };

  const metaGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: darkMode ? '#0f172a' : '#f8fafc',
    border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
    marginBottom: '28px'
  };

  const metaItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '14px'
  };

  if (!product) {
    return (
      <div style={containerStyle}>
        <button onClick={() => navigate('/products')} style={backButtonStyle}>
          <FaArrowLeft /> Quay lại danh sách sản phẩm
        </button>
        <div style={{ ...cardStyle, textAlign: 'center', padding: '48px' }}>
          <FaBoxOpen style={{ fontSize: '48px', color: '#ef4444', marginBottom: '16px' }} />
          <h2 style={{ color: '#ef4444', margin: '0 0 12px 0' }}>Không tìm thấy sản phẩm!</h2>
          <p style={{ color: darkMode ? '#94a3b8' : '#64748b', margin: 0 }}>
            Sản phẩm với mã ID "{id}" không tồn tại trong hệ thống.
          </p>
          <Link
            to="/products"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              color: '#0284c7',
              fontWeight: '600',
              textDecoration: 'none'
            }}
          >
            ← Xem danh sách tất cả sản phẩm
          </Link>
        </div>
      </div>
    );
  }

  const formattedPrice = typeof product.price === 'number'
    ? `${product.price.toLocaleString('vi-VN')} ₫`
    : product.price;

  return (
    <div style={containerStyle}>
      <button
        onClick={() => navigate('/products')}
        style={backButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = darkMode ? '#334155' : '#f1f5f9')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = darkMode ? '#1e293b' : '#ffffff')}
      >
        <FaArrowLeft /> Quay lại danh sách sản phẩm
      </button>

      <div style={cardStyle}>
        <div style={titleRowStyle}>
          <div>
            <h1 style={titleStyle}>{product.name || product.title}</h1>
            <div style={{ marginTop: '10px' }}>
              <span style={badgeStyle}>{product.category}</span>
            </div>
          </div>
        </div>

        <div style={metaGridStyle}>
          <div style={metaItemStyle}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: darkMode ? '#1e293b' : '#e0f2fe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0284c7',
              fontSize: '18px'
            }}>
              
            </div>
            <div>
              <div style={{ fontSize: '12px', color: darkMode ? '#94a3b8' : '#64748b' }}>Đơn giá niêm yết</div>
              <strong style={{ fontSize: '18px', color: '#0284c7' }}>{formattedPrice}</strong>
            </div>
          </div>

          <div style={metaItemStyle}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: darkMode ? '#1e293b' : '#e0f2fe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0284c7',
              fontSize: '18px'
            }}>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: darkMode ? '#94a3b8' : '#64748b' }}>Mã sản phẩm (ID)</div>
              <strong style={{ fontSize: '16px', color: darkMode ? '#f8fafc' : '#0f172a' }}>#{product.id}</strong>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '700',
            marginBottom: '10px',
            color: darkMode ? '#f8fafc' : '#0f172a'
          }}>
            Thông tin chi tiết sản phẩm
          </h3>
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.7',
              color: darkMode ? '#cbd5e1' : '#475569',
              margin: 0
            }}
          >
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
