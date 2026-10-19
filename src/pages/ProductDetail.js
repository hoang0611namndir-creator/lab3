import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaRegStar, FaCalendarAlt, FaClock, FaUserTie } from 'react-icons/fa';

export default function ProductDetail({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();

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
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '24px',
    transition: 'all 0.2s ease'
  };

  const cardStyle = {
    borderRadius: '16px',
    padding: '36px',

  };

  const titleRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '16px'
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: '800',
    margin: 0
  };

//   const starBtnStyle = {
//     background: 'none',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '30px',
//     color: movie?.isFavorite ? '#eab308' : (darkMode ? '#64748b' : '#cbd5e1'),
//     padding: 0,
//     display: 'flex',
//     alignItems: 'center'
//   };

  const badgeStyle = {
    display: 'inline-block',
    fontSize: '13px',
    fontWeight: '600',
    padding: '4px 12px',
    borderRadius: '9999px',
    marginBottom: '20px'
  };

  const metaGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '16px',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '24px'
  };

  const metaItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
  };

  if (!product) {
    return (
      <div style={containerStyle}>
        <button onClick={() => navigate('/products')} style={backButtonStyle}>
          <FaArrowLeft /> quay lại danh sách sản phẩm
        </button>
        <div style={{ ...cardStyle, textAlign: 'center', padding: '48px' }}>
          <h2 style={{ color: '#ef4444' }}>Không tìm thấy phim!</h2>
          <p>
            Sản phẩm với ID "{id}" không tồn tại trong hệ thống.
          </p>
          <Link
            to="/products"
            style={{
              display: 'inline-block',
              marginTop: '16px',
              color: '#0284c7',
              textDecoration: 'underline'
            }}
          >
            Xem danh sách tất cả các sản phẩm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <button
        onClick={() => navigate('/products')}
        style={backButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
      >
        <FaArrowLeft /> Quay lại danh sách sản phẩm
      </button>

      <div style={cardStyle}>
        <div style={titleRowStyle}>
          <div>
            <h1 style={titleStyle}>{product.name}</h1>
            <div style={{ marginTop: '8px' }}>
              <span style={badgeStyle}>{product.category}</span>
            </div>
          </div>

        </div>

        <div style={metaGridStyle}>
          <div style={metaItemStyle}>
            <FaUserTie style={{ color: '#0284c7' }} />
            <div>
              <div style={{ fontSize: '12px', color:  '#64748b' }}>giá</div>
              <strong>{product.price}</strong>
            </div>
          </div>

    

        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color:'#f8fafc' }}>
            chi tiết sản phẩm
          </h3>
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.7',
              color: '#cbd5e1',
              margin: 0
            }}
          >
            {product.description}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
