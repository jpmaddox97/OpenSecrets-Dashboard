import React from "react";
import { PropTypes } from "prop-types";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = ({ title, word, setWord, handleSubmit }) => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="mb-auto me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="">Features</Nav.Link>
            <Nav.Link to="/states">States</Nav.Link>
          </Nav>
          <Form onSubmit={handleSubmit} className="d-flex">
            <FormControl
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
