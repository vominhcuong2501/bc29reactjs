import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUserAction, setSelectedUserAction } from "../../Store/actions/userActions";

class UserManagement extends Component {
  state = {
    keyword: "",
    selectedType: "All",
  };

  renderUserList = () => {
    let data = this.props.userList.filter((ele) => {
      return (
        ele.fullname
          .toLowerCase()
          .trim()
          .indexOf(this.state.keyword.toLowerCase().trim()) !== -1
      );
    });

    if(this.state.selectedType !== "All") {
      data = data.filter(ele => ele.type === this.state.selectedType)
    }
    return data.map((item, index) => {
      const { id, username, fullname, email, phoneNumber, type } = item;
      return (
        <tr key={id} className={`${index % 2 === 0 && "bg-light"}`}>
          <td>{index + 1}</td>
          <td>{username}</td>
          <td>{fullname}</td>
          <td>{email}</td>
          <td>{phoneNumber}</td>
          <td>{type}</td>
          <td>
            <button
              onClick={() =>
                this.props.dispatch(setSelectedUserAction(item))
              }
              className="btn btn-info mr-2"
            >
              EDIT
            </button>
            <button
              onClick={() => {
                this.props.dispatch(deleteUserAction(id));
              }}
              className="btn btn-danger"
            >
              DELETE
            </button>
          </td>
        </tr>
      );
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="card p-0 mt-3">
        <div className="card-header font-weight-bold">USER MANAGEMENT</div>
        <div className="row mt-4 px-3 ">
          <div className="col-4">
            <div className="form-group mb-0">
              <input
                onChange={this.handleChange}
                name="keyword"
                type="text"
                placeholder="Search by full name..."
                className="form-control"
              />
            </div>
          </div>
          <div className="col-3 ml-auto">
            <div className="form-group mb-0">
              <select
                className="form-control"
                onChange={this.handleChange}
                name="selectedType"
              >
                <option>All</option>
                <option>Client</option>
                <option>Admin</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Username</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.renderUserList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ ...state.userReducer }))(UserManagement);
