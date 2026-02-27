import React from 'react';
import Navigation from './Navbar';

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
}