import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
// import './header.css';

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My App</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/fav">Fav</Link>
      </Navbar>
    )
  }
}

export default Header;