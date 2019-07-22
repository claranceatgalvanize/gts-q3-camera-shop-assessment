import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';

const Footer = () => {
    return (
        <div>
             <Navbar className="text-secondary px-4" color="dark" light expand="md">
                <NavbarBrand><small>&copy; Clarance Farley | 2019</small></NavbarBrand>
            </Navbar> 
        </div>
    )
}

export default Footer
