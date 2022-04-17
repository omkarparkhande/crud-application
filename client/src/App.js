import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { Switch, Route } from "react-router-dom"
import React, { Component } from 'react';
import Edit from "./components/Edit";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/view/:id" component={Details} />
      </Switch>

    </>
  );
}

export default App;
