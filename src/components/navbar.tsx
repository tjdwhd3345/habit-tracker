import React, { memo } from 'react';

interface NavbarProps {
  totalCount: number
}

const Navbar = memo(({ totalCount }: NavbarProps) => {
  // console.log('navbar.jsx');
  return (
    <nav className='navbar'>
      <i className='fas fa-leaf navbar-logo'></i>
      <span>Habit Tracker</span>
      <span className='navbar-count'>{totalCount}</span>
    </nav>
  );
});

export default Navbar;
