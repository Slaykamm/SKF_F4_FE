import React from "react";
import './styles/App.css'

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import { Routes, Route, Navigate } from 'react-router-dom';
import Receipe from "./components/Receipe";
import Main from "./components/Main";


function App() {

  return (
    <>

      <div>
        <Routes>
          <Route path='/' element={<Navigate replace to='main/'/>}/>
          <Route path='main/' element={<Main/>} />
          <Route path='main/receipe/:id' element={<Receipe/>}/>
        </Routes>
      </div>

    </>
  );
}

export default App;

// для активации SWAGGER надо активировать строчку внизу. и все будет ок.
//export default App = () => <SwaggerUI url='http://127.0.0.1:8000/openapi' />