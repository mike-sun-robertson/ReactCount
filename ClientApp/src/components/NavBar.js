import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { FaShoppingCart } from "react-icons/fa";


const NavBar = ({ totalCounters }) => {
        return (
            <nav className="navbar bg-light">
                <div className="navbar-brand">
                    <FaShoppingCart />
                    <span className="badge badge-pill badge-info m-3" style={{ width: 50 }}>
                        {totalCounters}
                    </span>
        Items
      </div>
            </nav>
        );
    };


export default NavBar;
