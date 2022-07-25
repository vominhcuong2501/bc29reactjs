import React, { Component } from "react";

export default class DienThoai extends Component {
  render() {
    const { addToCart,selectPhone, phone } = this.props;

    return (
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" src={phone.hinhAnh} height={250} />
          <div className="card-body">
            <h4 className="card-title">{phone.name}</h4>
            <div>
              <button
                onClick={() => selectPhone(phone)}
                className="btn btn-success"
              >
                XEM CHI TIẾT
              </button>
              <button onClick={() => addToCart(phone)} className="btn btn-danger">THÊM GIỎ HÀNG</button>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
