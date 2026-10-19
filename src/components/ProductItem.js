import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.js';
import { FaInfoCircle } from 'react-icons/fa';

export default function ProductItem({ product }) {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    borderRadius: '12px',
    border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
    backgroundColor: darkMode ? '#1e293b' : '#ffffff',
    boxShadow: darkMode
      ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
      : '0 2px 8px rgba(0, 0, 0, 0.06)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
    boxSizing: 'border-box'
  };

  const headerRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '8px'
  };

  const titleStyle = {
    margin: 0,
    fontSize: '18px',
    fontWeight: '700',
    color: darkMode ? '#f8fafc' : '#0f172a',
    lineHeight: '1.3'
  };

  const badgeStyle = {
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: '600',
    padding: '3px 10px',
    borderRadius: '9999px',
    backgroundColor: darkMode ? '#334155' : '#e0f2fe',
    color: darkMode ? '#38bdf8' : '#0369a1',
    marginRight: '8px'
  };

  const priceStyle = {
    fontSize: '15px',
    fontWeight: '700',
    color: '#0284c7'
  };

  const descriptionStyle = {
    fontSize: '13px',
    color: darkMode ? '#cbd5e1' : '#475569',
    margin: '12px 0 16px 0',
    lineHeight: '1.5',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  };

  const detailBtnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#0284c7',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease'
  };

  const formattedPrice = typeof product.price === 'number'
    ? `${product.price.toLocaleString('vi-VN')} ₫`
    : product.price;

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = darkMode
          ? '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
          : '0 8px 16px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = darkMode
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
          : '0 2px 8px rgba(0, 0, 0, 0.06)';
      }}
    >
      <div>
        <div style={headerRowStyle}>
          <h3 style={titleStyle}>{product.name || product.title}</h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '6px' }}>
          <span style={badgeStyle}>{product.category}</span>
          <span style={priceStyle}>
            {formattedPrice}
          </span>
        </div>

        <p style={descriptionStyle}>{product.description}</p>
      </div>

      <div>
        <button
          onClick={() => navigate(`/products/${product.id}`)}
          style={detailBtnStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0369a1')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0284c7')}
        >
          <span>Chi tiết sản phẩm</span>
        </button>
      </div>
    </div>
  );
}