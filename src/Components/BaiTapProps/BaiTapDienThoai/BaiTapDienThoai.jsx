import React, { Component } from "react";
import dataPhone from "../../../Data/DataPhone.json";
import DienThoai from "./DienThoai";
import ModalDienThoai from "./ModalDienThoai";

export default class BaiTapDienThoai extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectPhone: dataPhone[0],
      gioHang: [],
    };
  }

  selectedPhone = (phone) => {
    this.setState({
      selectPhone: phone,
    });
  };

  renderSanPham = () => {
    return dataPhone.map((item) => {
      return (
        <div className="col-4" key={item.maSP}>
          <DienThoai
            selectedPhone={this.selectedPhone}
            phone={item}
            themGioHang={this.themGioHang}
          />
        </div>
      );
    });
  };

  themGioHang = (phoneChon) => {
    let spGioHang = {
      maSP: phoneChon.maSP,
      hinhAnh: phoneChon.hinhAnh,
      tenSP: phoneChon.tenSP,
      soLuong: 1,
      giaBan: phoneChon.giaBan,
    };
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGioHang);
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  xoaSanPham = (index) => {
    var gioHangCapNhat = [...this.state.gioHang];
    gioHangCapNhat.splice(index, 1);
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  tangGiamSl = (maSP, tangGiam) => {
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else if (gioHangCapNhat[index].soLuong > 1) {
      gioHangCapNhat[index].soLuong -= 1;
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  render() {
    const { hinhAnh, manHinh, heDieuHanh, cameraSau, cameraTruoc, ram, rom } =
      this.state.selectPhone;
    return (
      <div className="container">
        <h4>PRODUCT LIST</h4>
        <div>
          <ModalDienThoai
            gioHang={this.state.gioHang}
            xoaSanPham={this.xoaSanPham}
            tangGiamSl={this.tangGiamSl}
          />
        </div>
        <div className="row">{this.renderSanPham()}</div>
        <div className="row mt-5">
          <div className="col-5">
            <h4>Vinsmart Live</h4>
            <img src={hinhAnh} className="img-fluid" alt="phone" />
          </div>
          <div className="col-7">
            <h4 className="mb-5">THÔNG SỐ KỸ THUẬT</h4>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
