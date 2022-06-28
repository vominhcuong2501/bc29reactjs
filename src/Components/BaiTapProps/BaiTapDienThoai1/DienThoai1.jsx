import React, { Component } from "react";

export default class DienThoai extends Component {
  render() {
    const { hinhAnh, name } = this.props.phone;

    return (
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" src={hinhAnh} height={250} />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <div>
              <button
                onClick={() => this.props.selectPhone(this.props.phone)}
                className="btn btn-success"
              >
                XEM CHI TIẾT
              </button>
              <button onClick={() => this.props.addToCart(this.props.phone)} className="btn btn-danger">THÊM GIỎ HÀNG</button>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
