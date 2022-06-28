import React, { Component } from "react";

export default class ModalDienThoai extends Component {

  renderGioHang = () => {
    let {gioHang, xoaSanPham, tangGiamSl} = this.props;
    return gioHang.map((spGH, index) => {
      return (
        <tr key={spGH.maSP}>
          <td>{spGH.maSP}</td>
          <td>
            <img src={spGH.hinhAnh} height={70} width={100} />
          </td>
          <td>{spGH.tenSP}</td>
          <td>
            <button className="btn btn-warning" onClick={() => tangGiamSl(spGH.maSP, false)}>-</button>
            <span className="mx-1">{spGH.soLuong}</span>
            <button className="btn btn-warning" onClick={() => tangGiamSl(spGH.maSP, true)}>+</button>
          </td>
          <td>{(spGH.giaBan).toLocaleString()}</td>
          <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
          <td>
            <button className="btn btn-danger" onClick={()=> xoaSanPham(index)}>Xóa</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    let {gioHang} = this.props;
    const tongSP = gioHang.reduce((tsl, ele, index) => {
      return tsl += ele.soLuong
    }, 0) 
    return (
      <div>
        <div className="d-flex justify-content-end mb-2">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#gioHang"
          >
            GIỎ HÀNG ({tongSP})
          </button>
        </div>
        <div
          className="modal fade"
          id="gioHang"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Hình Ảnh</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn Giá</th>
                      <th>Thành Tiền</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderGioHang()}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5}></td>
                      <td>Tổng tiền</td>
                      <td>
                        {gioHang.reduce((tongTien, spGH, index)=> {
                          return tongTien += spGH.soLuong * spGH.giaBan;
                        }, 0).toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
