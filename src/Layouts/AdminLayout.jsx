import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default class AdminLayout extends Component {
  render() {
    return (
      <div className="d-flex">
        <div className="bg-light vh-100" style={{ width: "15%" }}>
          <ul style={{ listStyle: "none" }}>
            <li>
              <NavLink to="/admin/user-management">User Management</NavLink>
            </li>
            <li>
              <NavLink to="/admin/clothes-management">
                Clothes Management
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="bg-white" style={{ width: "85%" }}>
          <Outlet />
        </div>
      </div>
    );
  }
}
