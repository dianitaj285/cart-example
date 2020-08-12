import React, { Component } from "react"
import { UpDownQuantity } from "./CartComponents"

export default class extends Component {
  constructor() {
    super()
    this.state = {
      inputText: 0,
      total: 0,
    }
  }

  render() {
    return (
      <>
        <div className="cartContainer">
          <div className="gridContainer">
            <div className="insideGridHeaderLeft">Product</div>
            <div className="insideGridHeader">Quantity</div>
            <div className="insideGridHeader">Total</div>
            <div className="insideGridHeaderRight"> remove</div>
            {this.props.cart.map((product, index) => (
              <>
                <div className="insideGrid">{product.name}</div>
                <div className="insideGrid">
                  <UpDownQuantity 
                  buttonOneText="+" buttonTwoText="-" inputText=
                  {product.quantity}
                  onAdd={this.props.addOne(index)}
                  onRemove={this.props.removeOne(index)}
                  />
                </div>
                <div className="insideGrid">
                  $ {product.price * product.quantity}
                </div>
                <div className="insideGrid">
                  <button onClick={this.props.removeProduct(index)}>X</button>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    )
  }
}
