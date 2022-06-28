import React, { Component } from 'react'

export default class Giay extends Component {
  render() {
    let {item, showDescription} = this.props
    return (
        <div className="card" key={item.id}>
        <img
          className="card-img-top"
          src={item.image}
        />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">Price: {item.price}$</p>
          <div className="mb-2">{this.props.children}</div>
          <button className="btn btn-info" onClick={() => showDescription(item.description)}>Xem mô tả</button>
        </div>
      </div>
    )
  }
}
