import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Card, Button, Container, Form, Row, Col } from "react-bootstrap";
import { Context } from "../index";
import BrandBar from "../componenrs/BrandBar";
import DeviceList from "../componenrs/DeviceList";
import TypeBar from "../componenrs/TypeBar";
import {
  fetchType,
  fetchBrand,
  fetchDevice,
  fetchOneDevice,
} from "../http/deviceApi";
import Pages from "../componenrs/Pages";

const Shop = observer(() => {
  const { device } = useContext(Context);
  useEffect(() => {
    fetchType().then((data) => device.setTypes(data));
    fetchBrand().then((data) => device.setBrands(data));
    fetchDevice(null, null, device.page, device.limit).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
    fetchOneDevice(12).then((data) => {
      console.log(data.info);
    });
  }, []);
  useEffect(() => {
    fetchDevice(
      device.selectedType.id,
      device.selectedBrand.id,
      device.page,
      device.limit
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
      console.log(data.count);
    });
  }, [device.page, device.selectedType, device.selectedBrand]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});
export default Shop;
