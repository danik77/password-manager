import React from "react";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ROUTES from "./routes";
import { Container } from "@mui/material";

function App() {
  return (
    <Container sx={{textAlign: "center", mt: 4}}>
    <Router>
      <Routes>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Routes>
    </Router>
    </Container>
  );
}

export default App;
