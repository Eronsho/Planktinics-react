import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import { Button, Container, Image } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
  BASKET_ROUTE,
} from "../utils/consts";
import { observer } from "mobx-react-lite";
import Logo from "../assest/Logo.png";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();
  const logOut = () => {
    user.setUser();
    user.setIsauth(false);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE}>
          <Image src={Logo} width={150} />
        </NavLink>
        {user._isauth ? (
          <Nav className="ml-auto">
            <Button
              onClick={() => logOut()}
              className="mr-4"
              variant={"outline-light"}
            >
              Выйти
            </Button>
            <Button
              className="mr-4"
              onClick={() => history.push(ADMIN_ROUTE)}
              variant={"outline-light"}
            >
              Админ
            </Button>
            <Button
              onClick={() => history.push(BASKET_ROUTE)}
              variant={"outline-light"}
            >
              Корзина
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
export default NavBar;
