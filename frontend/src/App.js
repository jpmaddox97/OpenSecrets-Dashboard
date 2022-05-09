import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import CandidateCard from "./components/Card";
import { Container, Row, Col } from "react-bootstrap";

// checks for a server stored in the env file or uses localhost
// eslint-disable-next-line no-undef
const API_URL = process.env.REACT_API_URL || "http://127.0.0.1:5000";

const App = () => {
  const [word, setWord] = useState("");
  const [objects, setObjects] = useState({});

  // handles event passed through the search box
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/legislators?state=${word}`)
      .then((res) => res.json())
      .then((data) => {
        setObjects(data);
        // console.log("result of api fetch");
        // for (let object in data) {
        //   console.log(data[object].firstlast)
        // };
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(word);
    setWord("");
  };

  const log = (func) => {
    console.log(func);
    return func;
  };

  const makeArray = (objects) => {
    let array = [];
    for (let key in objects) {
      array.push(objects[key]);
    }

    return array;
  };

  const objectArray = makeArray(objects);

  return (
    <div>
      <Header
        title="Open Secrets Clone"
        word={word}
        setWord={setWord}
        handleSubmit={handleSearchSubmit}
      />
      <Container className="mt-4">
        {objectArray.length ? (
          <Row xs={1} md={2} lg={3}>
            {objectArray.map((object, i) => (
              // eslint-disable-next-line react/jsx-key
              <Col key={i} className="pb-3">
                <CandidateCard
                  firstlast={log(object.firstlast)}
                  office={log(object.congress_office)}
                  party={log(object.party)}
                  website={log(object.website)}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
