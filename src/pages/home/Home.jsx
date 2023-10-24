import React from "react";
import products from "../../data/products.js";
import "../../styles/Home.css";
import Product from "./Product.jsx";

const productData = products.map((item, i) => {
  return <Product data={item} key={i} />;
});

function Home() {
  return (
    <div className="home-container">
      <h1>Chef's Kitchen</h1>
      <div className="product-map">{productData}</div>
    </div>
  );
}

export default Home;
