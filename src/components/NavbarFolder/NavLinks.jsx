import React, { useState } from 'react';
import logo from '../../assets/logoSolo.png';
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import '../NavbarFolder/navlinks.css';
import { TextField } from '@mui/material';


const NavLinks = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
  }

  return (
    <Navbar id='navBar' variant="dark" expand="lg">
    <Container>
      <Navbar.Brand>
        <img src={logo} alt="logo" className="navbar-brand fs-1 logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navmenu" id="navButton">
        <span id="togglerButton" className="navbar-toggler-icon" />
      </Navbar.Toggle>
      <Navbar.Collapse id="navmenu">
        <Nav className="ms-auto">
{/* dropdown list / fav links  */}
          <Dropdown>
            <Dropdown.Toggle className='dropDown' variant='success' id='dropdown-basic'>
              Favorite Links
            </Dropdown.Toggle>

            <Dropdown.Menu id='dropdownMenu'>
              <Dropdown.Item id='dropdownItem' href='https://chat.openai.com/chat' target="_blank">ChatGPT</Dropdown.Item>
              <Dropdown.Item id='dropdownItem' href='https://www.linkedin.com/' target="_blank">LinkedIn</Dropdown.Item>
              <Dropdown.Item id='dropdownItem' href='https://github.com/' target="_blank">Github</Dropdown.Item>
              <Dropdown.Item id='dropdownItem' href='https://mail.google.com/mail/u/0/#inbox' target="_blank">Gmail</Dropdown.Item>
              <Dropdown.Item id='dropdownItem' href='https://stackoverflow.com/' target="_blank">StackOverFlow</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

  {/* form input for google */}
  <form onSubmit={handleSubmit} target="_blank">
    <label id='labelContainer'>
      <TextField
        id='standard-basic'
        label="Enter Here"
        variant='standard'
        value={query}
        onChange={(e) => setQuery(e.target.value)}/>
    </label>
    <button type='submit'>Search The Googs</button>
  </form>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavLinks;
