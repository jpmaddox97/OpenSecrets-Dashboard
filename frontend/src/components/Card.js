import React from "react";
import { PropTypes } from "prop-types";
import { Button, Card } from "react-bootstrap";


const displayParty = (party) => {
  if (party === "D") {
    return "Democrat"
  } else if (party === "R") {
    return "Republican"
  } else {
    return "Independent"
  };
};


const CandidateCard = ({ firstlast, office, party, website }) => {

  // const candidate = Object.values(candidates);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body style={{justifyContent: "center"}}>
        <Card.Title style={{textAlign: "center"}}>{firstlast}</Card.Title>
        <Card.Text style={{textAlign: "center"}}>
          {office}
        </Card.Text>
        <Card.Text style={{textAlign: "center"}}>
          {displayParty(party)}
        </Card.Text>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Button className="mb-1" variant="primary">About</Button>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Button variant="primary" href={website}>{firstlast}'s Website</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

Card.propTypes = {
  firstlast: PropTypes.string,
  office: PropTypes.string,
  cid: PropTypes.string,
  website: PropTypes.string,
};

export default CandidateCard;
