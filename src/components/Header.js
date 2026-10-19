import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const headerContainerStyle = {
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 40px',
    backgroundColor:  '#ffffff',
    borderBottom: `1px solid ${ '#e2e8f0'}`,
    boxShadow:  '0 2px 4px rgba(0, 0, 0, 0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '32px'
  };

  const brandStyle = {
    fontSize: '22px',
    fontWeight: '800',
    color:  '#0284c7',
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
    const isActive = location.pathname === path || (path === '/products' && location.pathname.startsWith('/movies'));
    return {
      textDecoration: 'none',
      padding: '8px 16px',
      borderRadius: '8px',
      fontSize: '15px',
      fontWeight: isActive ? '600' : '500',
      color: isActive
        ? ('#0284c7')
        : ('#475569'),
      backgroundColor: isActive
        ? ( 'rgba(2, 132, 199, 0.1)')
        : 'transparent',
      transition: 'all 0.2s ease'
    };
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
              <Link to="/products" style={getNavLinkStyle('/movies')}>ProductList</Link>
            </li>
            
          </ul>
        </nav>
      </div>

      
    </header>
  );
}