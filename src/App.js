import React, { Component } from 'react';
import productsJson from "./static/data/products.json"
import Product from "./Components/Product";

class App extends Component {
  render() {
    let productsData = productsJson['products'];

    let productsList = Object.entries(productsData).map((element) => (
      <Product data={element[1]}></Product>
    ));

    return (
      <div>
        {productsList}
      </div>
    );
  }
}

export default App;
