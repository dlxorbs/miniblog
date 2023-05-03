import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Mainpage from './components/page/Mainpage';
import PostWritePage from './components/page/PostWritepage';
import PostView from './components/page/PostView'
import Header from './components/UI/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter basename={process.env.PUBLIC_URL}>
  <Header></Header>
  <Routes>
    <Route index element = {<Mainpage/>}></Route>
    <Route path='write' element={<PostWritePage/>}></Route>
    <Route path='post/:id' element={<PostView/>}></Route>
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
