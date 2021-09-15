import { Image, Card } from "react-bootstrap";
import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import star from "../assest/star.png";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import { Context } from "../index";
const DeviceItem = ({ devices }) => {
  const history = useHistory();
  const { device } = useContext(Context);

  return (
    <Col md={3} onClick={() => history.push(DEVICE_ROUTE + "/" + devices.id)}>
      <Card
        style={{ width: 210, cursor: "pointer" }}
        border={"light"}
        className="
    justify-content-center
   align-items-center mt-2"
      >
        <Image
          width={150}
          height={250}
          src={"http://localhost:5000/" + devices.img}
        />
        <div
          className="text-black-50 mt-1 d-flex  
         justify-content-between
        align-items-center"
        >
          {device.types.map((type) =>
            type.id === devices.typeId ? (
              <strong>{type.name}&nbsp; </strong>
            ) : (
              ""
            )
          )}
          {device.brands.map((brand) =>
            brand.id === devices.brandId ? (
              <strong>{brand.name}&nbsp; </strong>
            ) : (
              ""
            )
          )}

          <div className="d-flex align-items-center">
            <Image src={star} /> <small>{devices.rating} </small>
          </div>
        </div>
        <div>
          {devices.name}
          <small> от {devices.price} руб.</small>
        </div>
      </Card>
    </Col>
  );
};
export default DeviceItem;
