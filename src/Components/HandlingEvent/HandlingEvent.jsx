import React, { Component } from 'react'

export default class HandlingEvent extends Component {
    handleLogin = () => {
        alert("Welcome Cybersoft");
    }

    handleLogout = (name) => {
        alert (`${name} đã đăng xuất.`)
    }


  render() {
    return (
      <div>
        <h5>HandlingEvent</h5>
        {/* Không có tham số */}
        <button onClick={this.handleLogin} className='btn btn-success mr-3'>Login</button>
        <button onClick={() => alert("Hello Cybersoft")} className='btn btn-info'>Login 2</button>
        <br />
        {/* Có tham số */}
        <button onClick={this.handleLogout.bind(this, "Cybersoft")} className='btn btn-warning mr-3 mt-3'>Logout</button>
        <button onClick={() => this.handleLogout("Cybersoft")} className='btn btn-primary mt-3'>Logout 2</button>
      </div>
    )
  }
}
