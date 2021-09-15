import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./index";
import "./App.css";
import AppRouter from "./componenrs/AppRouter";
import NavBar from "./componenrs/NavBar";
import { chek } from "./http/userApi";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      chek()
        .then((data) => {
          user.setUser(true);
          user.setIsauth(true);
        })
        .finally(() => setLoading(false));
    }, 2000);
  }, []);
  if (loading) {
    return <Spinner animation={"grow"} />;
  }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
