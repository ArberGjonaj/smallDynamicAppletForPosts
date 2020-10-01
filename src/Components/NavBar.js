import React from "react";
import { Navbar,Nav } from 'react-bootstrap';

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

<Navbar.Brand  href={this.props.ref1}>{this.props.Item1}</Navbar.Brand>

<Navbar.Toggle aria-controls="basic-navbar-nav" />

<Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mr-auto">

        <Nav.Link href={this.props.ref2}>{this.props.Item2}</Nav.Link>

        <Nav.Link href={this.props.ref3}>{this.props.Item3}</Nav.Link>


    </Nav>



</Navbar.Collapse>

</Navbar>

            </React.Fragment>
        )
    }
}



export default NavBar;