import React, { Component } from "react";
import phoneList from "../../../Data/DataPhone.json";
import DienThoai1 from "./DienThoai1";


export default class DanhSachDienThoai extends Component {
  renderPhoneList = () => {
    return phoneList.map((ele) => {
      return (
        <DienThoai1 key={ele.maSP} phone={ele} />
      );
    });
  };

  render() {
    return (
      <div>
        <h4>PRODUCT LIST</h4>
        <div className="row">{this.renderPhoneList()}</div>
      </div>
    );
  }
}
