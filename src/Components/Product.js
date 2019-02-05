import React, { Component } from 'react';
import '../App.css'

class Product extends Component {
  render() {
    // TODO product picture
    let productData = this.props.data;
    let productImgSrc = '/products/' + productData['sku'] + '_1.jpg';
    let productName = productData['title'];
    let productPrice = productData['price'];

    return (
      <div className="productWrapper">
        <img className="productImage" img src={productImgSrc} alt="Product"></img>
        <div className="productName">{productName}</div>
        <div className="productPrice">{productPrice}</div>
        <div><button>Add To Cart</button></div>
      </div>
    );
  }
}

export default Product;
