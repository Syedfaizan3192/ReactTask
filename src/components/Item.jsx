import React, { useState, useCallback } from "react";
import Nav from "react-bootstrap/Nav";
import { Row, Col } from "react-bootstrap";
import ModalComponent from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserById, fetchUsers } from "../redux/UserSlice";

const Item = ({ data }) => {
  let users = useSelector((state) => state.user.users);
  const [showSearchUser, setSearchUser] = useState(true);
  const searchResults = useSelector((state) => state.searchResults);
  const [showModal, setShowModal] = useState(false);
  const [selected_User, setSelectedUser] = useState(null);

  const dispatch = useDispatch();
  console.log(showSearchUser, "---");
  useEffect(() => {
    if (data?.payload?.items?.length > 0) {
      setSearchUser(false);
    } else {
      setSearchUser(true);
    }
  }, [data?.payload?.items?.length > 0]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    if (selected_User?.id) {
      dispatch(fetchUserById(selected_User?.id));
    }
  }, [dispatch, selected_User]);

  const handleOpenModal = useCallback((userData) => {
    setSelectedUser(userData);
    setShowModal(true);
  }, []);

  console.log(users, "after loading new data");
  return users && users.length > 0 ? (
    showSearchUser ? (
      users.map((dt) => (
        <div className="items" key={dt.id}>
          <Row>
            <Col ms={"4"}>
              <img src={dt.avatar_url} alt="item-image" />
            </Col>
            <Col ms={"4"}>
              <div className="name" onClick={() => handleOpenModal(dt)}>
                {dt.login}
              </div>
            </Col>
            <Col ms={"4"}>
              <Nav.Link className={"nav-link-url"} href={dt.html_url}>
                {dt.html_url}
              </Nav.Link>
            </Col>
          </Row>
          <ModalComponent showModal={showModal} setShowModal={setShowModal} />
        </div>
      ))
    ) : (
      data?.payload?.items.map((dt) => (
        <div className="items" key={dt.id}>
          <Row>
            <Col ms={"4"}>
              <img src={dt.avatar_url} alt="item-image" />
            </Col>
            <Col ms={"4"}>
              <div className="name" onClick={() => handleOpenModal(dt)}>
                {dt.login}
              </div>
            </Col>
            <Col ms={"4"}>
              <Nav.Link className={"nav-link-url"} href={dt.html_url}>
                {dt.html_url}
              </Nav.Link>
            </Col>
          </Row>
          <ModalComponent showModal={showModal} setShowModal={setShowModal} />
        </div>
      ))
    )
  ) : (
    <></>
  );
};

export default Item;
