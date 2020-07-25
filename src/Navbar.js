import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <nav className='navbar'>
        <Link to='/todos' className='navbar-header'>TODOS</Link>
        <Link to='/todos/new' className='navbar-link'>New Todo</Link>
    </nav>
);

export default Navbar;