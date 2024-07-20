import './App.css'
import React from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import store from './store'

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Register from './components/Register';


function App() {

  return (

    <Provider store={store}>
      <BrowserRouter>

        <Routes>
          <Route path='/register' element={<Register />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
