import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaRegStar, FaCalendarAlt, FaClock, FaUserTie } from 'react-icons/fa';

function NotFound() {
  const navigate = useNavigate();


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
  return (
    <div>
      NOT FOUND
       <button
              onClick={() => navigate('/home')}
              style={backButtonStyle}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
            >
              <FaArrowLeft /> Quay lại trang chủ
            </button>
    </div>
  )
}

export default NotFound
