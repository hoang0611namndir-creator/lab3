import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaHome, FaBoxOpen, FaExclamationTriangle } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext.js';

export default function NotFound() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const containerStyle = {
    maxWidth: '600px',
    margin: '80px auto',
    padding: '40px 24px',
    textAlign: 'center',
    borderRadius: '16px',
    backgroundColor: darkMode ? '#1e293b' : '#ffffff',
    border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
    boxShadow: darkMode ? '0 10px 25px -5px rgba(0,0,0,0.4)' : '0 10px 25px -5px rgba(0,0,0,0.05)'
  };

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#0284c7',
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease',
    margin: '6px'
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: darkMode ? '#334155' : '#f1f5f9',
    color: darkMode ? '#f8fafc' : '#334155',
    border: `1px solid ${darkMode ? '#475569' : '#cbd5e1'}`
  };

  return (
    <div style={containerStyle}>
      <div style={{ fontSize: '64px', color: '#f59e0b', marginBottom: '16px' }}>
        <FaExclamationTriangle />
      </div>
      <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '0 0 8px 0', color: darkMode ? '#f8fafc' : '#0f172a' }}>
        404
      </h1>
      <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 16px 0', color: darkMode ? '#e2e8f0' : '#334155' }}>
        Trang không tồn tại
      </h2>
      <p style={{ fontSize: '15px', color: darkMode ? '#94a3b8' : '#64748b', margin: '0 0 28px 0', lineHeight: '1.6' }}>
        Đường dẫn bạn vừa truy cập không hợp lệ hoặc đã bị thay đổi.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <button
          onClick={() => navigate('/')}
          style={buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0369a1')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0284c7')}
        >
          <FaHome /> Quay lại trang chủ
        </button>
        <Link
          to="/products"
          style={secondaryButtonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = darkMode ? '#475569' : '#e2e8f0')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = darkMode ? '#334155' : '#f1f5f9')}
        >
          <FaBoxOpen /> Xem danh sách sản phẩm
        </Link>
      </div>
    </div>
  );
}
