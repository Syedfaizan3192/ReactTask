import PropTypes from "prop-types";
import React, { Component, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import DefaultImage from "../assets/images/logo.svg";

const ModalComponent = ({ showModal, setShowModal, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShowModal(false);
  //   const handleShow = () => setShowModal(true);
  return (
    <div className="custom-modal">
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Faizan Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-data">
            <img src={DefaultImage} alt="item-image" />

            <h3 className="m-3">Full Name</h3>
            <div className="followers">
              <span className="m-3 column-name">Followers:</span>
              <span className="data">10000000</span>
            </div>
            <div className="following">
              <span className="m-3 column-name">Following:</span>
              <span className="data">0</span>
            </div>
            <div className="location">
              <span className="m-3 column-name">Location:</span>
              <span className="data">JOHAR </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
