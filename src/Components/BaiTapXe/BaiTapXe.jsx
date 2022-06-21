import React, { Component } from "react";

export default class BaiTapXe extends Component {
  state = {
    img: "./imageCar/products/black-car.jpg",
  };

  changeColor = (color) => {
    this.setState({
      img: `./imageCar/products/${color}-car.jpg`
    })
    
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-7">
            <img
              className="img-fluid"
              src={this.state.img}
            />
          </div>
          <div className="col-5 text-left">
            <div className="card">
              <div className="card-header text-center">Colors</div>
              <div className="card-body">
                <div onClick={() => this.changeColor('black')}>
                  <img
                    width={70}
                    src="./imageCar/icons/icon-black.jpg"
                    alt=""
                  />
                  <span>BLACK</span>
                </div>
                <div onClick={() => this.changeColor('red')}>
                  <img width={70} src="./imageCar/icons/icon-red.jpg" alt="" />
                  <span>RED</span>
                </div>
                <div onClick={() => this.changeColor('silver')}>
                  <img
                    width={70}
                    src="./imageCar/icons/icon-silver.jpg"
                    alt=""
                  />
                  <span>SILVER</span>
                </div>
                <div onClick={() => this.changeColor('steel')}>
                  <img
                    width={70}
                    src="./imageCar/icons/icon-steel.jpg"
                    alt=""
                  />
                  <span>STEEL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
