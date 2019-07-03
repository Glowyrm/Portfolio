import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div >

      <h1>Header</h1>

      <Link to="/">Home</Link> 

      <span>|</span> 
      <Link to="/about">About</Link>

    </div>
  )
}