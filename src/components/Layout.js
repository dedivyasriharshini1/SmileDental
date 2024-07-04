// components/Layout.js
import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <Header/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
