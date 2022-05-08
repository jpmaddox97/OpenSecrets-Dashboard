import React from "react";
import { PropTypes } from "prop-types";
import { Button, Card } from "react-bootstrap";

const CandidateCard = ({ firstlast, office, cid, website }) => {

  // const candidate = Object.values(candidates);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{firstlast}</Card.Title>
        <Card.Text>
          {office}
          {cid}
        </Card.Text>
        <Button variant="primary" href={website}>{firstlast}'s Website</Button>
      </Card.Body>
    </Card>
  );
};

Card.propTypes = {
  firstlast: PropTypes.string.isRequired,
  office: PropTypes.string.isRequired,
  cid: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};

export default CandidateCard;
