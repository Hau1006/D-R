import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
    <Router>
      <Header />
     
      <main>
      
        <Container>
        <Routes>
         <Route exact  path='/home' element={ <Home/>}/>
         <Route exact  path='/cart' element={ <Cart/>}/>
         <Route exact  path='/login' element={ <Login/>}/>
         <Route exact  path='/product/:id' element={ <ProductDetail/>}/>
         </Routes>
        </Container>
        
      </main>
    
      <Footer />
      </Router>
    </>
  );
}

export default App;
