import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import { Context } from "../index";
import DeviceItem from "./DeviceItem";
const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex">
      {device.devices[0] ? (
        device.devices.map((devices) => (
          <DeviceItem key={devices.id} devices={devices} />
        ))
      ) : (
        
        <Alert variant="info">Товара нет в наличии</Alert>
      )}
    </Row>
  );
});
export default DeviceList;
