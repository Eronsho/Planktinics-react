import React, { useContext, useEffect, useState } from "react";
import { Container, Col, Image, Row, Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../index";
import BigStar from "../assest/bigStar.png";
import { fetchOneDevice } from "../http/deviceApi";
import StarRating from "../componenrs/StarRating";

const DevicePage = () => {
  const { device } = useContext(Context);
  const [devices, setDevices] = useState({ info: [] });
  const { id } = useParams();
  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevices(data));
  }, []);
  const addBasket = (devices) => {
    let repeated = false;
    for (let i = 0; i < device.baskets.length; i++) {
      if (devices.id === device.baskets[i].id) {
        repeated = true;
      }
    }
    if (repeated == false) {
      device.addBasket(devices);
    } else {
      console.log("repeated");
    }
  };

  return (
    <Container className="mt-3 ">
      <Row>
        <Col md={4}>
          <Image
            width={250}
            height={400}
            src={"http://localhost:5000/" + devices.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-colum align-items-center">
            <strong>
              {device.types.map((type) =>
                type.id === devices.typeId ? <strong>{type.name} </strong> : ""
              )}
              {device.brands.map((brand) =>
                brand.id === devices.brandId ? (
                  <strong>{brand.name} &nbsp;</strong>
                ) : (
                  ""
                )
              )}
              {devices.name}
            </strong>

            <div
              className="d-flex align-items-center "
              style={{
                width: 340,
                height: 240,
                fontSize: 24,
                backgroundSize: "cover",
              }}
            >
              Рейтинг &nbsp;{" "}
              <StarRating
                devicesRating={devices.rating}
                deviceId={devices.id}
                key={devices.id}
              />
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-columm align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3> от {devices.price} руб.</h3>
            <Button onClick={() => addBasket(devices)} variant={"outline-dark"}>
              Добавить в корзину
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column">
        <h2>Характристики</h2>
        {devices.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent ",
            }}
          >
            {info.title}:{info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};
export default DevicePage;
