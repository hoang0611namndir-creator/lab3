import React from 'react';
import { useTheme } from '../context/ThemeContext.js';

export default function CategoryFilter({ filter, onFilterChange, sortBy, onSortChange }) {
  const { darkMode } = useTheme();

  const selectStyle = {
    padding: '10px 14px',
    fontSize: '14px',
    borderRadius: '8px',
    border: `1px solid ${darkMode ? '#475569' : '#cbd5e1'}`,
    backgroundColor: darkMode ? '#1e293b' : '#ffffff',
    color: darkMode ? '#f8fafc' : '#0f172a',
    cursor: 'pointer',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    minWidth: '150px'
  };

  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {/* Bộ lọc theo thể loại */}
      <select
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        style={selectStyle}
        aria-label="Filter by genre"
      >
        <option value="all"> Tất cả</option>
        <option value="Phone">Điện Thoại</option>
        <option value="Tablet">Máy tính bảng</option>
        <option value="Laptop">Laptop</option>
        <option value="Custom">Phụ kiện</option>
      </select>

      {/* Sắp xếp */}
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        style={selectStyle}
        aria-label="Sort movies"
      >
        <option value="default">Sắp xếp mặc định</option>
        <option value="title-asc">Tên  (A → Z)</option>
        <option value="title-desc">Tên  (Z → A)</option>
        <option value="price-desc">Giá (Cao → Thấp)</option>
        <option value="price-asc">Giá (Thấp → Cao)</option>
      </select>
    </div>
  );
}