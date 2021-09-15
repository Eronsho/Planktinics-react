import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Row, Card } from "react-bootstrap";
const BrandBar = observer(() => {
  const { device } = useContext(Context);
  console.log(device.selectedBrand);
  console.log(device.brands);
  return (
    <Row className="d-flex">
      <Card
        className="p-3"
        border="light"
        style={{ cursor: " pointer" }}
        onClick={() => device.setSelectedBrand(device.brands)}
        border={device.selectedBrand == device.brands ? "danger" : "light"}
      >
        Все
      </Card>
      {device.brands.map((brand) => (
        <Card
          className="p-3"
          key={brand.id}
          style={{ cursor: " pointer" }}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});
export default BrandBar;
