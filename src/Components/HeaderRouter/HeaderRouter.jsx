import React, { Component } from "react";
import { createRef } from "react";
import { createSearchParams, NavLink } from "react-router-dom";
import { withRoute } from "../../HOC/withRouter";

class HeaderRouter extends Component {
  inputRef = createRef();
  render() {
    return (
      <nav className="router navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">
          ROUTER
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
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movie-detail/2000">
                Movie detail
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hooks">
                Hooks
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <div className="form-group mb-0">
              <input ref={this.inputRef} className="form-control" type="text" />
            </div>
            <button onClick={() => {
              const value = this.inputRef.current.value;
              // dịnh nghĩa query params
              this.props.navigate({
                pathname: '/about',
                search: `?${createSearchParams({
                  keyword: value,
                  userId: 1,
                  movieId: 2,
                })}`
              })
            }} className="btn btn-success">
              Search
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRoute(HeaderRouter);
