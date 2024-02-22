import PropTypes from "prop-types";
import React, { Component, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import DefaultImage from "../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../redux/UserSlice";
import { useEffect } from "react";

const ModalComponent = ({ showModal, setShowModal, ...props }) => {
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const [show, setShow] = useState(false);
  const handleClose = () => setShowModal(false);
  //   const handleShow = () => setShowModal(true);

  return (
    <div className="custom-modal">
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedUser?.name || "-"} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-data">
            <img src={selectedUser?.avatar_url} alt="item-image" />

            <h3 className="m-3">{selectedUser?.name || "-"}</h3>
            <div className="followers">
              <span className="m-3 column-name">Followers:</span>
              <span className="data">{selectedUser?.followers || "N/A"}</span>
            </div>
            <div className="following">
              <span className="m-3 column-name">Following:</span>
              <span className="data">{selectedUser?.following || "N/A"}</span>
            </div>
            <div className="location">
              <span className="m-3 column-name">Location:</span>
              <span className="data">{selectedUser?.location || "-"} </span>
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
