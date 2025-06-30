import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RegisterPage from './Pages/RegisterPage';
import Navbar from './Components/Navbar';
import Details from './Components/Details';
import Footer from './Components/Footer';
import Home from './Components/Home';
import PropsPage from './Pages/PropsPage';
import DriverProfile from './Components/DriverProfile';
import DriverTable from './Components/DriverTable';
import Driver from './Components/Driver';
import StudentProps from './Components/StudentProps';
import LoginPage from './Pages/LoginPage';
import UserPage from './Pages/UserPage';
import ProtectedRoute from './Pages/ProtectedRoute';
import ListGroup from './Components/ListGroup';
import ProfPage from './Practice/Pages/ProfPage';
import OperandPage from './Pages/OperandPage';
import OperandPage2 from './Pages/OperandPage2';
import ShoppingCartPage from './Pages/ShoppingCartPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import BasketPage from './Pages/BasketPage';
import NavbarCart from './Components/NavbarCart';



function App() {

  const [cartItems, setcartItems] = useState([]);
  const [IsAuto, setIsAuto] = useState(false);


  const CounterShoppingCartItem = Array.isArray(cartItems) ? cartItems.reduce((total,item) => total+item.adet,0) : 0;


  const AddBasket = (product) => {

    const ItemControl = cartItems.find(item => item.id === product.id) // add basket her sayfada calıscagı ıcın dağıtım alanına yazmamız gerekir. brezilyayı buluyor ve var olduğunu söylüyor

    console.log(cartItems)

    if (ItemControl) {

      setcartItems(cartItems.map(item => item.id === product.id ? { ...item, adet: item.adet + 1 } : item)) // brezilya nerdeyse götürüyor hem olduğunu söylüyor hem de o toprağa götürüyor.
      alert("Ürün Listede bulunmaktadır, adeti arttırılıyor")

    }

    else {

      setcartItems(...cartItems, { ...product, adet: 1 }) /// 3 nokta hafızaya al hatırla demektir. 
      
    }

    alert("Ürün Eklendi")
    console.log(cartItems)

  }

  const removefromShoppingCart = (urunId)=>{

    setcartItems(cartItems.filter(item => item.id !== urunId)) 
  }


  return (

    <React.StrictMode>
      <Router>

        <header>{IsAuto && <Navbar />}</header>

        <section>
          <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} >
            <div style={{ width: "15%", height: "100%" }}>
              <div style={{ padding: "10px" }} ><ListGroup /></div>
            </div>
            <div style={{ width: "70%", backgroundColor: "white" }}>
            <NavbarCart CounterShoppingCartItem={CounterShoppingCartItem} />

              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/LoginPage' element={<LoginPage onLogin={() => setIsAuto(true)} />} />
                <Route path='/RegisterPage' element={<RegisterPage />} />
                <Route path='/Details/:id' element={<Details />} />
                <Route path='/PropsPage/:id' element={<PropsPage />} />
                <Route path='/DriverProfile/:id' element={<DriverProfile />} />
                <Route path='/UserPage' element={<UserPage />} />

                <Route path='/DriverTable' element={
                  <ProtectedRoute>
                    <DriverTable />
                  </ProtectedRoute>} />
                <Route path='/Driver/:id' element={<Driver />} />
                <Route path='/StudentProps' element={<StudentProps />} />
                <Route path='/OperandPage' element={<OperandPage />} />
                <Route path='/OperandPage2' element={<OperandPage2 />} />
                <Route path='/ProfPage' element={<ProfPage />} />
                <Route path='/BasketPage' element={<BasketPage AddBasket={AddBasket} />} />
                <Route path='/ShoppingCartPage' element={<ShoppingCartPage cartItems={cartItems} removefromShoppingCart={removefromShoppingCart}  />} />
              </Routes>
            </div>

            <div style={{ width: "15%", height: "100%" }} >REKLAM</div>
          </div>
        </section>
      </Router>
    </React.StrictMode>

  )
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();