import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";
const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup className="list-group">
      <ListGroup.Item
        style={{ cursor: " pointer" }}
        className="list-group-item"
        onClick={() => device.setSelectedType(device.types)}
        active={device.types === device.selectedType}
      >
        Все
      </ListGroup.Item>
      {device.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: " pointer" }}
          className="list-group-item"
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});
export default TypeBar;
