import * as React from 'react';

import Footer from './Footer';
import NavBar from './Navbar';

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <main>
      <NavBar/>
      {children}
      <Footer/>
    </main>
  )
}

export default Layout;