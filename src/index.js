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
import ReactHooks from './Components/UseEffectAndUseRef';
import UseContext from './Components/UseContext';
import ApiCalls from './Components/apiCalls';
import UseMemo from './Components/UseMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <BrowserRouter>
      <Routes>
         <Route path='/' element={<App/>}></Route>
         <Route path='/login' element={<LoginPage/>}></Route>
         <Route path='/register' element={<RegisterPage/>}></Route>
         <Route path='/homepage' element={<HomePage/>}></Route>
         <Route path='/contact' element={<ContactPage/>}></Route>
         <Route path='/hooks' element={<ReactHooks/>}></Route>
         <Route path='/context' element={<UseContext />}></Route>
         <Route path='/apiCalls' element={<ApiCalls />}></Route>
         <Route path='/useMemo' element={<UseMemo />}></Route>
      </Routes>
   </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
