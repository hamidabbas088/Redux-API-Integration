import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductComponent from "./components/ProductComponent";
import ProductDetail from "./components/ProductDetail";
import "./App.css"

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={ProductListing}/>
          <Route path="/product/:productId" exact Component={ProductDetail}/>
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
