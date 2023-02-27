import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  window.onload = function() {
    route(getUrlVars());
  };
  return (
      <div >
        <Header/>

        <MText/>
        <script type="text/javascript">route(getUrlVars());</script>
        <Card.Body>
          <Background/>
        </Card.Body>

        <Card.Footer><Footer/></Card.Footer>
      </div>
  );
}

export default App;
