import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { createBrand, createType } from "../../http/deviceApi";

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const addBrand = () => {
    try {
      createBrand({ name: value }).then((data) => {
        setValue("");
        onHide();
      });
    } catch (e) {
      alert(e);
    }
  };
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить брэнд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={"Введите название брэнда"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addBrand}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;