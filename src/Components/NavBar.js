import React from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";
class NavBar extends React.Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar  bg={"info"} variant="dark" expand="lg" >
          <NavbarBrand>
            
            <Nav.Item>
              <NavLink to={"/news"}>News</NavLink>
            </Nav.Item>

          </NavbarBrand>
          <Nav.Item style={{paddingLeft:'10px'}}>
                <NavLink to={"/news/create"}>Create </NavLink>
              </Nav.Item>
          <NavbarBrand>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav  className=" justify-content-end">

              <Nav.Item class="ml-auto" bg={"warning"}>
                <NavLink style={{color:'red'}} to={"/"}>Logout</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
