import React, { Component } from "react"

export default class EditForm extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <div className="mainPage">
          <div className="productHeader"> Product: </div>
          <div className="productsSale">
            <div className="imageDiv">
              <img className="image"></img>
            </div>
            <div className="productInfo">
              <span> Price: $ </span>
              <div className="buttonsDiv">
                <button className="addOneButton">+</button>
                <input className="addInput" readOnly></input>
                <button className="addOneButton">-</button>
              </div>
              <button className="addButton">Add</button>
            </div>
            <div className="productInfo">
              <p>Total: $ </p>
              <p>Items:</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
