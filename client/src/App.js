import './App.css'
import React from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import store from './store'
import Catalog from './components/Catalog';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Register from './components/Register';
import DressComponent from "./components/DressComponent"
import Navbar from "./components/Navbar"
import ContactForm from "./components/ContactForm"
import JewCalendar from "./components/JewCalender"

function App() {

  return (

    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/dressComponent' element={<DressComponent />} />
          <Route path='/contactForm' element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
