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
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
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
            <Button variant="primary" type="submit">Search</Button>
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
