import React, { Component } from "react"
import { Link } from "react-router-dom"
import { UpDownQuantity, ProductHeader } from "./CartComponents"

const PRODUCTS = [
  {
    id: 1,
    name: "Cocker Spaniel",
    price: "15000",
    image:
      "https://t1.uc.ltmcdn.com/images/7/5/5/img_como_cuidar_de_un_cocker_spaniel_5557_600_square.jpg",
  },

  {
    id: 2,
    name: "Chihuaha",
    price: "10000",
    image:
      "https://image.freepik.com/foto-gratis/chihuahua-pelo-largo-joven_87557-7509.jpg",
  },

  {
    id: 3,
    name: "Dachshund",
    price: "20000",
    image:
      "https://1.bp.blogspot.com/-pvlA4oVs8Y0/VstjpoZ8_uI/AAAAAAAABK8/rdFxIEMFVUs/s1600/file_23020_dachshund-dog-breed-460x290.jpg",
  },

  {
    id: 4,
    name: "German Sheperd",
    price: "5000",
    image:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213218/German-Shepherd-on-White-00.jpg",
  },

  {
    id: 5,
    name: "Shetland sheepdog",
    price: "10000",
    image:
      "https://www.purina.es/sites/g/files/mcldtz1656/files/2019-06/Pastor%20de%20Shetland%20o%20Shetland%20Sheepdog_400x378_0.jpg",
  },
]

export default class Products extends Component {
  constructor() {
    super()
    this.state = {
      inputText: 0,
      total: 0,
      products: PRODUCTS.map((product) => ({ ...product, quantity: 0 })),
    }
  }

  addOneHandler = (index) => (event) => {
    this.setState((state) => {
      const products = [...state.products]
      const product = { ...products[index] }
      product.quantity += 1
      products[index] = product
      return { products: products }
    })
  }

  removeOneHandler = (index) => (event) => {
    this.setState((state) => {
      const products = [...state.products]
      const product = { ...products[index] }
      if (product.quantity - 1 >= 0) {
        product.quantity -= 1
        products[index] = product
        return { products: products }
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

  render() {
    return (
      <>
        <div>
          {this.state.products.map((product, index) => (
            <div key={product.id}>
              <div id="mainPage" className="mainPage">
                <ProductHeader headerLabel="Product: " headerValue={product.name}>
                  <div className="productsSale">
                    <div className="imageDiv">
                      <img className="image" src={product.image}></img>
                    </div>
                    <div className="productInfo">
                      <span> Price: $ {product.price}</span>
                      <UpDownQuantity
                        buttonOneText="+"
                        buttonTwoText="-"
                        inputText={product.quantity}
                        onAdd={this.addOneHandler(index)}
                        onRemove={this.removeOneHandler(index)}
                      />
                      <button
                        className="addButton"
                        onClick={this.props.addProduct(product)}>
                        Add
                      </button>
                    </div>
                    <div className="productInfo">
                      <p>Total: $ {product.price * product.quantity}</p>
                      <p>Items: {product.quantity}</p>
                    </div>
                  </div>
                </ProductHeader>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }
}
