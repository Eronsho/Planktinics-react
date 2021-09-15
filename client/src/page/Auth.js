import { observer } from "mobx-react-lite";
import { React, useContext, useState } from "react";
import { Card, Button, Container, Form, Row } from "react-bootstrap";
import { useLocation, NavLink, useHistory } from "react-router-dom";
import { Context } from "../index";
import { login, registration } from "../http/userApi";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const history = useHistory();
  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password, name);
      }
      user.setUser(user);
      user.setIsauth(true);
      history.push(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <Container
      className="d-flex justify-content-center align-items-center "
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 468 }} className="p-5">
        <h2 className="m-avto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex  flex-column">
          {isLogin ? (
            <div>
              <Form.Control
                className="mt-4"
                placeholder="Ввеедите ваш email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
              <Form.Control
                className="mt-4"
                placeholder="Ввеедите ваш password..."
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </div>
          ) : (
            <div>
              <Form.Control
                className="mt-4"
                placeholder="Ввеедите ваш email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
              <Form.Control
                className="mt-4"
                placeholder="Ввеедите ваш password..."
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
              <Form.Control
                className="mt-4"
                placeholder="Ввеедите ваш name..."
                value={name}
                type="name"
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </div>
          )}
          <Row className="d-flex justify-content-between mt-4 pl-4 pr-4">
            {isLogin ? (
              <div>
                нет аккаунта?
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
              </div>
            ) : (
              <div>
                есть аккаунта? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            )}
            <Button
              className="mt-3 align-self-end"
              onClick={click}
              variant={"outline-success"}
            >
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});
export default Auth;
