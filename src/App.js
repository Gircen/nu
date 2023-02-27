import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import {getUrlVars, route} from "./routing/routing";
import Header from "./header/js/header";
import Footer from "./footer/js/footer"
import './App.css';

function App() {
  window.onload = function() {
    route(getUrlVars());
  };
  return (
      <div>

          <script type="text/javascript">route(getUrlVars());</script>
          <Header/>

          <Card.Body>

          </Card.Body>

        <Card.Footer><Footer/></Card.Footer>
      </div>
  );
}

export default App;
