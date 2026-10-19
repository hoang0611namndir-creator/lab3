import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.js';
import { FaSun, FaMoon, FaStore } from 'react-icons/fa';

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const headerContainerStyle = {
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 40px',
    backgroundColor: darkMode ? '#1e293b' : '#ffffff',
    borderBottom: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
    boxShadow: darkMode ? '0 4px 6px -1px rgba(0, 0, 0, 0.4)' : '0 2px 4px rgba(0, 0, 0, 0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    transition: 'background-color 0.25s ease, border-color 0.25s ease'
  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '32px'
  };

  const brandStyle = {
    fontSize: '22px',
    fontWeight: '800',
    color: darkMode ? '#38bdf8' : '#0284c7',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    letterSpacing: '-0.5px'
  };

  const navListStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '12px',
    margin: 0,
    padding: 0
  };

  const getNavLinkStyle = (path) => {
    const isActive = location.pathname === path || (path === '/products' && location.pathname.startsWith('/products'));
    return {
      textDecoration: 'none',
      padding: '8px 16px',
      borderRadius: '8px',
      fontSize: '15px',
      fontWeight: isActive ? '600' : '500',
      color: isActive
        ? (darkMode ? '#38bdf8' : '#0284c7')
        : (darkMode ? '#cbd5e1' : '#475569'),
      backgroundColor: isActive
        ? (darkMode ? 'rgba(56, 189, 248, 0.12)' : 'rgba(2, 132, 199, 0.1)')
        : 'transparent',
      transition: 'all 0.2s ease'
    };
  };

  const themeToggleButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '8px',
    border: `1px solid ${darkMode ? '#475569' : '#cbd5e1'}`,
    backgroundColor: darkMode ? '#334155' : '#f1f5f9',
    color: darkMode ? '#f8fafc' : '#334155',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  };

  return (
    <header style={headerContainerStyle}>
      {/* Góc trái: Brand và Navigation */}
      <div style={leftSectionStyle}>
        <Link to="/" style={brandStyle}>
          <span>ProductStore</span>
        </Link>
        <nav>
          <ul style={navListStyle}>
            <li>
              <Link to="/" style={getNavLinkStyle('/')}>Home</Link>
            </li>
            <li>
              <Link to="/products" style={getNavLinkStyle('/products')}>ProductList</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Góc phải: Dark Mode / Light Mode toggle */}
      <div>
        <button
          onClick={toggleTheme}
          style={themeToggleButtonStyle}
          title={darkMode ? 'Chuyển sang Light Mode' : 'Chuyển sang Dark Mode'}
        >
          {darkMode ? (
            <>
              <FaSun style={{ color: '#f59e0b' }} />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <FaMoon style={{ color: '#6366f1' }} />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}