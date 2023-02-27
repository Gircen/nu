import logo from './logo.svg';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from "react";
import {getUrlVars, route} from "./routing/routing";
import './App.css';

function App() {
  window.onload = function() {
    route(getUrlVars());
  };
  return (
      <div >
        <script type="text/javascript">route(getUrlVars());</script>
        <Card.Body>

        </Card.Body>

        <Card.Footer></Card.Footer>
      </div>
  );
}

export default App;
