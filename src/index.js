import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Login';
import RegisterPage from './Components/Registration';
import HomePage from './Components/HomePage';
import ContactPage from './Components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <BrowserRouter>
      <Routes>
         <Route path='/' element={<App/>}></Route>
         <Route path='/login' element={<LoginPage/>}></Route>
         <Route path='/register' element={<RegisterPage/>}></Route>
         <Route path='/homepage' element={<HomePage/>}></Route>
         <Route path='/contact' element={<ContactPage/>}></Route>
      </Routes>
   </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
