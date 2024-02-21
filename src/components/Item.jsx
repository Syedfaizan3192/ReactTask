import React, { Component, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DefaultImage from "../assets/images/logo.svg";
import ModalComponent from "./Modal";

const Item = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  return (
    <div className="items">
      <Row>
        <Col ms={"4"}>
          <img src={DefaultImage} alt="item-image" />
        </Col>
        <Col ms={"4"}>
          <div className="name" onClick={handleOpenModal}>
            Faizan
          </div>
        </Col>
        <Col ms={"4"}>
          <Nav.Link className={"nav-link-url"} href="https://facebook.com">
            https://facebook.com
          </Nav.Link>
        </Col>
      </Row>
      <ModalComponent showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Item;
