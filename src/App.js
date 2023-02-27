import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import {getUrlVars, route} from "./routing/routing";
import Header from "./header/js/header";
import TableReq from "./table/TableInterdepartmentalRequests"
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

        <Card.Footer></Card.Footer>
      </div>
  );
}

export default App;
