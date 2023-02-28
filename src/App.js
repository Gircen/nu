import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import {getUrlVars, route} from "./routing/routing";
import Header from "./header/js/header";
import Footer from "./footer/js/footer"
import './App.css';
import MainTab from "./tabs/MainTabs";
import Container from "react-bootstrap/Container";
import TableReq from "./table/TableInterdepartmentalRequests";

function App() {
  window.onload = function() {
    route(getUrlVars());
  };
  return (
      <div>

          <script type="text/javascript">route(getUrlVars());</script>
          <Header/>
          <TableReq />
          {/*<MainTab/>*/}


        <Card.Footer><Footer/></Card.Footer>
      </div>
  );
}

export default App;
