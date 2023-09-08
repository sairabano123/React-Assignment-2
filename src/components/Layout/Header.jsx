import { Navbar, Nav, Container } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';

export default function Header(props) {
  const userLoggedIn =
    <>
      <button class="btn btn-outline-primary" style={{ marginRight: "1em" }}>Dashboard</button>
      <button class="btn btn-outline-secondary" >Logout</button>
    </>
  return (
    <Navbar bg="info" variant="info">
      <Container>
        <Navbar.Brand href="/">Crypto Exchange</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/" >Home</NavLink>
          <NavLink className="nav-link" to="about-us" >About Us</NavLink>
          <NavLink className="nav-link" to="blogs" >Blogs</NavLink>

        </Nav>
        <Nav>
          {props.isUserLoggedIn ? userLoggedIn : <NavLink className="nav-link" to="sign-in" >Login</NavLink>}
        </Nav>
      </Container>
    </Navbar>

  );
}
