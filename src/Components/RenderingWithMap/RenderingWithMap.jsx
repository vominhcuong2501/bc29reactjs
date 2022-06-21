import React, { Component } from 'react'

export default class RenderingWithMap extends Component {

    carList = [
        {id: 1, name: 'black', price: 1000, imageUrl: './imageCar/products/black-car.jpg'},
        {id: 2, name: 'steel', price: 3000, imageUrl: './imageCar/products/steel-car.jpg'},
        {id: 3, name: 'silver', price: 2000, imageUrl: './imageCar/products/silver-car.jpg'},
        {id: 4, name: 'red', price: 4000, imageUrl: './imageCar/products/red-car.jpg'},
    ]
    renderCarList = () => {
        return this.carList.map((sanPham, index) => {
            return (
                <tr key={index}>
                    <td>{sanPham.id}</td>
                    <td>{sanPham.name}</td>
                    <td>{sanPham.price}</td>
                    <td><img src={sanPham.imageUrl} width={100} height={70} alt="" /></td>
                </tr>
            )
        })
    }

  render() {
    return (
      <div className='container'>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>ImageUrl</th>
                </tr>
            </thead>
            <tbody>
                {this.renderCarList()}
            </tbody>
        </table>
      </div>
    )
  }
}
