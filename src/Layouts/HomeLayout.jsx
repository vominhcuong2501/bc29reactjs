import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderRouter from '../Components/HeaderRouter/HeaderRouter'

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <HeaderRouter />
        <Outlet />
        <footer>
            Design by Cuong
        </footer>
      </div>
    )
  }
}
