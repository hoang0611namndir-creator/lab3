import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function Home({ products }) {
  const navigate = useNavigate();


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
    marginBottom: '40px'
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: '800',
    marginBottom: '16px',
    letterSpacing: '-0.5px'
  };

  const subtitleStyle = {
    fontSize: '18px',
    maxWidth: '650px',
    margin: '0 auto 28px auto',
    lineHeight: '1.6'
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





  
  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <h1 style={titleStyle}>Welcome to ProductStore</h1>
        <p style={subtitleStyle}>
        Manage and explore products for your needs
        </p>
        <Link
          to="/products"
          style={ctaButtonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0369a1')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0284c7')}
        >
          <span>View Products</span>
          <FaArrowRight />
        </Link>
      </section>

    </div>
  );
}
