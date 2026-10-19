import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import { products } from './data/products.js';
import ProductList from './pages/ProductList.js';
import NotFound from './pages/NotFound.js';
import ProductDetail from './pages/ProductDetail.js';

function MainApp() {
 

  return (
    <BrowserRouter>
      <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home products={products}/>} />
            <Route path="/products" element={<ProductList products={products} />} />
             <Route path="/products/:id" element={<ProductDetail products={products}  />} />
            <Route path="/invalid-url" element={<NotFound/>}/>
            {/* Redirect mọi route không hợp lệ về trang chủ */}
            <Route path="*" element={<Navigate to="/invalid-url" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default function App() {
  return (
      <MainApp />
  );
}