import React, { Component } from "react";

export default class DienThoai extends Component {
  render() {
    const { phone, selectedPhone, themGioHang } = this.props;

    return (
      <div className="card">
        <img className="card-img-top" src={phone.hinhAnh} height={250} />
        <div className="card-body">
          <h4 className="card-title">{phone.tenSP}</h4>
          <div>
            <button
              className="btn btn-success"
              onClick={() => selectedPhone(phone)}
            >
              XEM CHI TIẾT
            </button>
            <button className="btn btn-danger" onClick={() =>themGioHang(phone)}>THÊM GIỎ HÀNG</button>
          </div>
        </div>
      </div>
    );
  }
}
