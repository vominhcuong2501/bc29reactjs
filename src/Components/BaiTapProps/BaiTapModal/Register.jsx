import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div className="text-left">
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input type="text" className="form-control" />
        </div>
      </div>
    );
  }
}
