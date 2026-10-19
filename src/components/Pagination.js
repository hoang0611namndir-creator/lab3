import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Pagination({ currentPage, totalPages, onPageChange }) {

  // Không hiển thị nếu không có trang nào
  if (totalPages <= 0) return null;

  const paginationContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '32px',
    marginBottom: '24px',
    flexWrap: 'wrap'
  };

  const baseButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '8px',
    border: `1px solid  '#cbd5e1'}`,
    backgroundColor: '#ffffff',
    color: '#334155',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    userSelect: 'none'
  };

  const disabledButtonStyle = {
    ...baseButtonStyle,
    opacity: 0.45,
    cursor: 'not-allowed',
    backgroundColor: '#f1f5f9',
    color: '#94a3b8'
  };

  const getPageNumberStyle = (pageNum) => {
    const isActive = pageNum === currentPage;
    if (isActive) {
      return {
        ...baseButtonStyle,
        backgroundColor: '#0284c7',
        borderColor: '#0284c7',
        color: '#ffffff',
        cursor: 'default'
      };
    }
    return {
      ...baseButtonStyle,
      minWidth: '40px',
      justifyContent: 'center'
    };
  };

  // Tạo danh sách trang: 1, 2, ..., totalPages
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages.map((pageNum) => (
      <button
        key={pageNum}
        type="button"
        style={getPageNumberStyle(pageNum)}
        onClick={() => {
          if (pageNum !== currentPage) {
            onPageChange(pageNum);
          }
        }}
        aria-label={`Trang ${pageNum}`}
        aria-current={pageNum === currentPage ? 'page' : undefined}
      >
        {pageNum}
      </button>
    ));
  };

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  return (
    <div style={paginationContainerStyle} aria-label="Pagination Navigation">
      {/* Nút previous page (disable ở trang 1) */}
      <button
        type="button"
        style={isFirstPage ? disabledButtonStyle : baseButtonStyle}
        disabled={isFirstPage}
        onClick={() => !isFirstPage && onPageChange(currentPage - 1)}
        title="Trang trước"
      >
        <FaChevronLeft style={{ fontSize: '12px' }} />
        <span>Previous page</span>
      </button>

      {/* Danh sách các số trang: 1, 2, 3, ..., [total page] */}
      {renderPageNumbers()}

      {/* Nút after page (disable ở trang [total page]) */}
      <button
        type="button"
        style={isLastPage ? disabledButtonStyle : baseButtonStyle}
        disabled={isLastPage}
        onClick={() => !isLastPage && onPageChange(currentPage + 1)}
        title="Trang kế tiếp"
      >
        <span>After page</span>
        <FaChevronRight style={{ fontSize: '12px' }} />
      </button>
    </div>
  );
}
