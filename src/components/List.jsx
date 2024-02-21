import PropTypes from "prop-types";
import React, { Component } from "react";
import Item from "./Item";
import { Row, Col } from "react-bootstrap";

const List = () => {
  return (
    <div className="list-item">
      <div className="headers mb-5">
        <Row>
          <Col ms={"4"}>IMAGE</Col>
          <Col ms={"4"}>NAME</Col>
          <Col ms={"4"}>URL</Col>
        </Row>
      </div>
      <Item />
    </div>
  );
};

export default List;
