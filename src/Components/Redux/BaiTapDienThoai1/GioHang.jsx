import React, { Component } from "react";
import {connect} from 'react-redux';

class GioHang extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-end mb-2">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#gioHang"
          >
            GIỎ HÀNG (
            {this.props.cartList.length}
            )
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
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.cartList.map((ele, index) => {
                      return (
                        <tr key={index}>
                          <td>1</td>
                          <td>
                            <img
                              width={50}
                              src={ele.hinhAnh}
                              className="img-fluid"
                              alt="phone"
                            />
                          </td>
                          <td>{ele.tenSP}</td>
                          <td>
                            <button
                              className="btn btn-warning"
                              onClick={() =>
                                this.props.handleQuantity(ele, false)
                              }
                            >
                              -
                            </button>
                            <span className="mx-1">{ele.soLuong}</span>
                            <button
                              className="btn btn-warning"
                              onClick={() =>
                                this.props.handleQuantity(ele, true)
                              }
                            >
                              +
                            </button>
                          </td>
                          <td>{ele.giaBan.toLocaleString()}</td>
                          <td>{(ele.giaBan * ele.soLuong).toLocaleString()}</td>
                          <td>
                            <button className="btn btn-danger" onClick={() => this.props.deletePhone(ele)}>Xóa</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5}></td>
                      <td>Tổng tiền</td>
                      <td>
                        {this.props.cartList.reduce((total, ele) => {
                          return (total += ele.soLuong * ele.giaBan);
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

const mapStateToProps = state => {
  return {
    ...state.phoneReducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleQuantity: (phone, isIncrease) => {
      dispatch({
        type: 'HANDLE_QUANTITY',
        payload: {phone, isIncrease}
      })
    },

    deletePhone: (phone) => {
      dispatch({
        type: 'DELETE_PHONE',
        phone
      })
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GioHang);

// export default connect(state => ({...state.phoneReducer}))(GioHang)
