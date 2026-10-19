import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.js';
import {  FaInfoCircle } from 'react-icons/fa';

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
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
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

  const starButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    transition: 'transform 0.15s ease, color 0.15s ease'
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

  const metaStyle = {
    fontSize: '13px',
    color: darkMode ? '#94a3b8' : '#64748b',
    marginTop: '6px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
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
    gap: '6px',
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

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
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
          <h3 style={titleStyle}>{product.title}</h3>
          
        </div>

        <div>
          <span style={badgeStyle}>{product.category}</span>
          <span style={{ fontSize: '13px', fontWeight: '500', color: darkMode ? '#cbd5e1' : '#64748b' }}>
            Giá :  {product.price}
          </span>
        </div>

        <p style={descriptionStyle}>{product.description}</p>
      </div>

      <div>
        <button
          onClick={() => navigate(`/list/${product.id}`)}
          style={detailBtnStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0369a1')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0284c7')}
        >
          <FaInfoCircle />
          <span>Product Detail</span>
        </button>
      </div>
    </div>
  );
}