import React from "react";
import { Card, Button, Container, Form, Row, Col } from "react-bootstrap";
import Pages from "../componenrs/Pages";
import DeviceListBasket from "../componenrs/DeviceListBasket";

const Basket = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={9}>
          <DeviceListBasket />
        </Col>
      </Row>
    </Container>
  );
};
export default Basket;
