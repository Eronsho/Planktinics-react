import { React, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import CreateBrand from "../componenrs/modals/CreateBrand";
import CreateDevice from "../componenrs/modals/CreateDevice";
import CreateType from "../componenrs/modals/CreateType";
const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button
        onClick={() => setTypeVisible(true)}
        variant={"outline-dark"}
        className="mt-2 pt-2"
      >
        Добавить тип
      </Button>
      <Button
        onClick={() => setBrandVisible(true)}
        variant={"outline-dark"}
        className="mt-2 pt-2"
      >
        Добавить бренд
      </Button>
      <Button
        onClick={() => setDeviceVisible(true)}
        variant={"outline-dark"}
        className="mt-2 pt-2"
      >
        Добавить устройства
      </Button>
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  );
};
export default Admin;
