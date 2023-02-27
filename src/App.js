import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import {getUrlVars, route} from "./routing/routing";
import TableReq from "./table/TableInterdepartmentalRequests"
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
