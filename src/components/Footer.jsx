import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  )
}
