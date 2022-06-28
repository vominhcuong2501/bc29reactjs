import React, { Component } from "react";
import ChiTietSanPham from "./ChiTietSanPham";
import DanhSachDienThoai from "./DanhSachDienThoai";
import GioHang from "./GioHang";
import phoneList from "../../../Data/DataPhone.json";

export default class BaiTapDienThoai extends Component {
  state = {
    selectedPhone: phoneList[0],
    cartList: [],
  };

  selectPhone = (phone) => {
    this.setState({
      selectedPhone: phone,
    });
  };

  addToCart = (phone) => {
    const data = [...this.state.cartList];
    let index = data.findIndex((ele) => ele.maSP === phone.maSP);
    if (index !== -1) {
      data[index].soLuong += 1;
    } else {
      data.push({ ...phone, soLuong: 1 });
    }

    this.setState(
      {
        cartList: data,
      },
      () => {
        console.log(this.state.cartList);
      }
    );
  };

  handleQuantity = (phone, isIncrease) => {
    const data = [...this.state.cartList];
    const index = data.findIndex((ele) => ele.maSP === phone.maSP);

    // if (index === -1) {
    //   alert("Không tìm thấy sản phẩm");
    //   throw new Error("Không tìm thấy sản phẩm");
    // }

    if (isIncrease) {
      data[index].soLuong += 1;
    } else if (data[index].soLuong > 1) {
      data[index].soLuong -= 1;
    } else if (window.confirm("Bạn có muốn xóa không?")) {
      data.splice(index, 1);
    }

    this.setState({
      cartList: data,
    });
  };

  render() {
    const {
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      hinhAnh,
    } = this.state.selectedPhone;
    return (
      <div className="container">
        <GioHang
          cartList={this.state.cartList}
          handleQuantity={this.handleQuantity}
        />
        <DanhSachDienThoai
          selectPhone={this.selectPhone}
          addToCart={this.addToCart}
        />
        <ChiTietSanPham selectedPhone={this.state.selectedPhone} />
      </div>
    );
  }
}
