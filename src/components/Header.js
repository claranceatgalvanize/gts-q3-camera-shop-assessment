import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, } from 'reactstrap';

const Header = () => {
    return (
        <div className="text-white">
            <Navbar color="dark" light expand="md">
                <NavbarBrand className="px-3">Camera Shop</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="text-secondary px-3" href="https://github.com/claranceatgalvanize/gts-q3-camera-shop-assessment">GitHub</NavLink>
                    </NavItem>
                </Nav>
            </Navbar> 
        </div>
    )
}

export default Header
