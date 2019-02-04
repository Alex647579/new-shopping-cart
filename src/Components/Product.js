import React, { Component } from 'react';

class Product extends Component {
  render() {
    // TODO product picture
    let productData = this.props.data;
    let productName = productData['title'];
    let productPrice = productData['price'];

    console.log(productData);
    return (
      <div>
        <div></div>
        <div>{productName}</div>
        <div>{productPrice}</div>
        <div><button>Add To Cart</button></div>
      </div>
    );
  }
}

export default Product;
