import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext.js';

export default function SearchBar({ search, onSearchChange }) {
  const { darkMode } = useTheme();

  const containerStyle = {
    position: 'relative',
    flex: '1 1 260px',
    display: 'flex',
    alignItems: 'center'
  };

  const iconStyle = {
    position: 'absolute',
    left: '14px',
    color: darkMode ? '#64748b' : '#94a3b8',
    fontSize: '15px',
    pointerEvents: 'none'
  };

  const inputStyle = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '10px 14px 10px 40px',
    fontSize: '14px',
    borderRadius: '8px',
    border: `1px solid ${darkMode ? '#475569' : '#cbd5e1'}`,
    backgroundColor: darkMode ? '#1e293b' : '#ffffff',
    color: darkMode ? '#f8fafc' : '#0f172a',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease'
  };

  return (
    <div style={containerStyle}>
      <FaSearch style={iconStyle} />
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm theo tên..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        style={inputStyle}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = '#0284c7';
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(2, 132, 199, 0.2)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = darkMode ? '#475569' : '#cbd5e1';
          e.currentTarget.style.boxShadow = 'none';
        }}
      />
    </div>
  );
}