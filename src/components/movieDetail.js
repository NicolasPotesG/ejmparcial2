import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const MovieDetail = (props) => {
  return (
    <React.Fragment>
      <Col xs={5}>
        <Card style={{ width: "24rem" }}>
          <Card.Img variant="top" src={props.movie.poster} />
          <Card.Body>
            <Card.Title>{props.movie.name}</Card.Title>
            <Card.Text>{props.movie.description}</Card.Text>
            <Card.Text>
              <b>{props.movie.cast}</b>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};
export default MovieDetail;
