import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { Context } from "../index";
import DeviceItem from "./DeviceItem";
const DeviceListBasket = observer(() => {
  const { device } = useContext(Context);
  const delitDeviceBasket = (id) => {
    device.delitDeviceBasket(id);
  };
  const [sumPrise, setSumPrise] = useState(0);

  useEffect(() => {
    device.baskets.map((sum) => {
      setSumPrise(device.baskets.price);
    });
  }, [device.baskets]);
  return (
    <>
      <h3 className="row justify-content-md-center">Корзина</h3>
      <h5> Выберете устройства </h5>
      <Row className="d-flex ">
        {device.baskets[0] ? (
          device.baskets.map((basket) => (
            <div>
              <strong onClick={() => delitDeviceBasket(basket.id)}>x</strong>
              <DeviceItem key={basket.id} devices={basket} />
            </div>
          ))
        ) : (
          <Alert variant="info">Корзина пуста</Alert>
        )}
      </Row>
      <Row className="row justify-content-md-center">
        <h2>
          Заказать {device.baskets.length}-щтукы за {sumPrise} pуб.
        </h2>
        {}
      </Row>
    </>
  );
});
export default DeviceListBasket;
