import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import Products from "./Products"
import Cart from "./Cart"
import { Link } from "react-router-dom"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: 0,
      total: 0,
      cart: [],
    }
  }


addOneHandler = (index) => (event) => {
  this.setState((state) => {
    const newCart = [...state.cart]
    const cartProduct = { ...state.cart[index] }
    cartProduct.quantity += 1
    newCart[index] = cartProduct
    return { cart: newCart }
  })
}

removeOneHandler = (index) => (event) => {
  this.setState((state) => {
    const newCart = [...state.cart]
    const cartProduct = { ...state.cart[index] }
    if (cartProduct.quantity - 1 >= 0) {
      cartProduct.quantity -= 1
      newCart[index] = cartProduct
      return { cart: newCart }
    }
  })
}


  addHandler = (clickedProduct) => (event) => {
    this.setState((state) => {
      const newCart = [...state.cart]
      const product = { ...clickedProduct }
      const cartProductIndex = newCart.findIndex(
        (addedproduct) => addedproduct.name === product.name
      )
      if (cartProductIndex === -1 && product.quantity > 0) {
        newCart.push(product)
        return { cart: newCart }
      }
      if (cartProductIndex === -1 && product.quantity === 0) {
      } else {
        const cartProduct = newCart[cartProductIndex]
        product.quantity += cartProduct.quantity
        newCart[cartProductIndex] = product
        console.log(this.props.cart)
        return { cart: newCart }
      }
    })
  }
  removeFromCart = (index) => (event) => {
    this.setState(function (state) {
      const newArray = [...this.state.cart]
      newArray.splice([index], 1)
      return { cart: newArray }
    })
  }
  alertHandler = (event) => {
    if (this.state.cart.length === 0) {
      alert("Your cart is empty, let's add some products")
      event.preventDefault()
      return false
    }
  }

  render() {
    return (
      <>
        <Router>
          <nav className="mainNav">
            <Link to="/products" className="linkClass">
              <button className="navButton"> Products</button>
            </Link>
            <Link to="/cart" className="linkClass">
              <button className="navButton" onClick={this.alertHandler}>
                Cart
              </button>
            </Link>
          </nav>
          <Route
            path="/products"
            render={(props) => (
              <Products
                {...props}
                cart={this.state.cart}
                addProduct={this.addHandler}
              />
            )}
          />
          <Route
            path="/cart"
            render={(props) => (
              <Cart
                {...props}
                cart={this.state.cart}
                removeProduct={this.removeFromCart}
                addOne={this.addOneHandler}
                removeOne={this.removeOneHandler}
              />
            )}
          />
        </Router>
      </>
    )
  }
}
