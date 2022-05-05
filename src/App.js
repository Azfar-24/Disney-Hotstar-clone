import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Login } from "./components/login/Login";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Detail } from "./components/Detail";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/detail/:id" element={<Detail />}></Route>
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
