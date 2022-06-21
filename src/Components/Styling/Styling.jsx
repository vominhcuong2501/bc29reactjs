import React, { Component } from 'react'

// Có 3 cách
// 1. stylesheets => tạo ra file css thông thường sẽ dính cho tất cả các component cho tên class giống css (không sử dụng nhiều)
import "./style.css"
// 2. module => tao file css [tên].module.css, khi gọi phải đặt (tên import.tên class)
import style from './style.module.css'
// 3. style inline => viết trực tiếp bên trong thẻ


export default class Styling extends Component {
    state = {
        fontSize: 30
    }

    increase = () => {
        this.setState({
            fontSize: this.state.fontSize + 10
        })
    }
    decrease = () => {
        this.setState({
            fontSize: this.state.fontSize - 10
        })
    }

  render() {
    return (
      <div className='container'>
        <h4 >Styling</h4>
        <p className='cybersoft-bg-color'>StyleSheets</p>
        <p className={style.cybersoft}>Module</p>
        <p className={`${style.cybersoft} ${style['cybersoft-bg-color']}`}>Module 1</p>
        <div className='mb-3'>
            <button onClick={() => this.increase()} className='btn btn-warning'>Increase</button>
            <button onClick={() => this.decrease()} className='btn btn-secondary'>Decrease</button>
        </div>
        <p style={{background: 'blue', fontSize: this.state.fontSize}}>Inline</p>
      </div>
    )
  }
}
