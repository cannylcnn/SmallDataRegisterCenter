import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Components/Home/Nav';
import HomePage from './Pages/HomePage';
import InventoryPage from './Pages/InventoryPage';
import FinancingPage from './Pages/FinancingPage';
import ContactUsPage from './Pages/ContactUsPage';
import Footer from './Components/Home/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Nav/>
    <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/HomePage' element={<HomePage/>}></Route>
    <Route path='/InventoryPage' element={<InventoryPage/>}></Route>
    <Route path='/FinancingPage' element={<FinancingPage/>}></Route>
    <Route path='/ContactUsPage' element={<ContactUsPage/>}></Route>
    </Routes>
  
    </Router>
  </React.StrictMode>
);


reportWebVitals();
