import React, { Component, Fragment } from "react";

export default class RenderingWithConditions extends Component {
  isLogin = false;
  isAllowRegister = false;

  renderContent = () => {
    if (this.isLogin) {
      return <p>Hello Cường</p>;
    }
    return (
      <Fragment>
        {this.isAllowRegister && (<button className="btn btn-warning">Register</button>)}
        
        <button className="btn btn-info">Login</button>
      </Fragment>
    );
  };

  render() {
    return (
      <div className="container">
        <h4>RenderingWithConditions</h4>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            {this.renderContent()}
          </div>
        </nav>
      </div>
    );
  }
}
