import React from 'react'
import {
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Nav_news extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>NEWS API</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Country" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to= '/newsid'>Indonesia</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to= '/newsid'>Indonesia</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Nav_news