import React, { Component } from "react";
import { createRef } from "react";
import { connect } from "react-redux";
import { addUserAction, updateUserAction } from "../../Store/actions/userActions";

const DEFAULT_VALUES = {
  id: "",
  username: "",
  fullname: "",
  password: "",
  email: "",
  phoneNumber: "",
  type: "Client",
};

class RegisterForm extends Component {
  //thuộc tính cấp ngoài cùng thì khi setState sẽ chỉ set lại thằng mới và giữ lại những giá trị cũ
  // thuộc tính bên trong 1 cấp thì khi setState sẽ mất đi giá trị cũ mà chỉ set cái mới
  state = {
    values: DEFAULT_VALUES,
    errors: {
      id: "",
      username: "",
      fullname: "",
      password: "",
      email: "",
      phoneNumber: "",
      type: "",
    },
  };

  // tạo để lấy thuộc tính của event.target
  formRef = createRef();
  
  // chuyển đổi props thành state với điều kiện props tồn tại và mã SV của props !== state
  static getDerivedStateFromProps(nextProps, currentState) {
    // console.log(nextProps, currentState);
    if (
      nextProps.selectedUser &&
      currentState.values.id !== nextProps.selectedUser.id
    ) {
      currentState.values = nextProps.selectedUser;
    }
    return currentState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        // giữ lại giá trị cũ thông qua spread operator và thêm cái mới
        values: { ...this.state.values, [name]: value },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // duyệt object là for-in
    // duyệt mảng là for-of
    // for(const key in this.state.errors) {
    //   console.log(event.target.checkValidity());
    //     const message = this.state.errors[key];
    //     if(message) return
    // }

      // dựa vào true false của checkValidity mà xét validation và disabled cho nút thêmSV
    if (!event.target.checkValidity()) {
      return;
    }

    // if(this.props.selectedUser) {
    //   this.props.dispatch({
    //     type: "UPDATE_USER",
    //     payload: this.state.values,
    //   })
    // } else {
    //   this.props.dispatch({
    //     type: "ADD_USER",
    //     payload: this.state.values,
    //   })
    // }
    // this.props.dispatch({
    //   type: this.props.selectedUser ? "UPDATE_USER" : "ADD_USER",
    //   payload: this.state.values,
    // });

    
    if(this.props.selectedUser) {
      this.props.dispatch(updateUserAction(this.state.values))
    } else {
      this.props.dispatch(addUserAction(this.state.values))
    }

    this.setState({
      values: DEFAULT_VALUES,
    }, () => {
      // force render (bắt component render lại 1 lần nữa)
      this.forceUpdate()
    });
  };

  handleBlur = (event) => {
    const {
      name,
      title,
      minLength,
      maxLength,
      validity: { valueMissing, patternMismatch, tooLong, tooShort },
    } = event.target;

    let message = "";
    if (patternMismatch) {
      message = `${title} is invalid patttern`;
    }
    if (tooShort || tooLong) {
      message = `${title} is from ${minLength} - ${maxLength} characters`;
    }
    if (valueMissing) {
      message = `${title} is required`;
    }
    this.setState({
      errors: { ...this.state.errors, [name]: message },
    });
  };

  render() {
    // nếu selected = null mà  bóc tách sẽ bị lỗi nên cho nó hoặc rỗng
    // const { username, fullname, password, email, phoneNumber, type } = this.props.selectedUser || {};
    // ở trên chuyển props thành state ta đổi ở dưới đây
    const { username, fullname, password, email, phoneNumber, type } =
      this.state.values || {};
    return (
      <div className="card p-0">
        <div className="card-header bg-warning text-white font-weight-bold">
          REGISTER FORM
        </div>
        <div className="card-body text-left">
          <form ref={this.formRef} noValidate onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    name="username"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    required
                    title="Username"
                  />
                  {this.state.errors.username && (
                    <span className="text-danger">
                      {this.state.errors.username}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={fullname}
                    name="fullname"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    required
                    minLength={4}
                    maxLength={12}
                    title="Fullname"
                  />
                  {this.state.errors.fullname && (
                    <span className="text-danger">
                      {this.state.errors.fullname}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="text"
                    className="form-control"
                    value={password}
                    name="password"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    required
                    title="Password"
                  />
                  {this.state.errors.password && (
                    <span className="text-danger">
                      {this.state.errors.password}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={phoneNumber}
                    name="phoneNumber"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    required
                    title="Phonenumber"
                  />
                  {this.state.errors.phoneNumber && (
                    <span className="text-danger">
                      {this.state.errors.phoneNumber}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    name="email"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    required
                    title="Email"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$"
                  />
                  {this.state.errors.email && (
                    <span className="text-danger">
                      {this.state.errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Type</label>
                  <select
                    className="form-control"
                    value={type}
                    name="type"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    required
                  >
                    <option>Client</option>
                    <option>Admin</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              className="btn btn-warning mr-2"
              disabled={!this.formRef.current?.checkValidity()}
            >
              SAVE
            </button>
            <button type="reset" className="btn btn-outline-dark" >
              RESET
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ ...state.userReducer }))(RegisterForm);
