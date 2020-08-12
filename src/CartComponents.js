import React from "react"

export function UpDownQuantity({
  buttonOneText,
  buttonTwoText,
  inputText,
  onAdd,
  onRemove,
}) {
  return (
    <div className="buttonsDiv">
      <button className="addOneButton" onClick={onAdd}>
        {buttonOneText}
      </button>
      <input className="addInput" readOnly value={inputText}></input>
      <button className="addOneButton" onClick={onRemove}>
        {buttonTwoText}
      </button>
    </div>
  )
}

export function ProductHeader({ headerLabel, headerValue, children }) {
  return (
    <div id="mainPage" className="mainPage">
      <div className="productHeader">
        {headerLabel} {headerValue}
      </div>
      <div className="productsSale">
        <div>{children}</div>
      </div>
    </div>
  )
}
