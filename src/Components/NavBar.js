import React from "react";
import { Navbar,Nav, NavbarBrand } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

class NavBar extends React.Component{
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render(){
        return(
            <React.Fragment>
                <Navbar bg={"info"} variant="dark" expand="lg" sticky="top">

                    <NavbarBrand>  <Nav.Item><NavLink to={"/news"}>News</NavLink> </Nav.Item> </NavbarBrand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mr-auto">
                            <Nav.Item>
                                <NavLink to={"/news/create"}>Create</NavLink>
                            </Nav.Item>

                            <Nav.Item>
                                <NavLink to={"/news/mynews"}>My News</NavLink>
                            </Nav.Item>

                        </Nav>

                    </Navbar.Collapse>

                </Navbar>

            </React.Fragment>
        )
    }
  
}



export default NavBar;