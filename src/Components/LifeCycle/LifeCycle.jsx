import React, { Component } from "react";
import Child from "./Child";

export default class LifeCycle extends Component {
  state = {
    number: 1,
    like: 0
  };

  constructor(props) {
    super(props);
    // console.log("constructor parent");
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    // console.log("getDeriveStateFormProps parent");

    // if (true) {
    //   // hàm có static không dùng 'this' dược nên this.setSate
    //   currentState.number = 10;
    // }
    return currentState;
  }

  render() {
    // console.log("render parent");
    return (
      <div className="bg-warning w-75 text-center mx-auto p-5">
        <h4>Parent</h4>
        {this.state.number >5 && <Child number={this.state.number} />}
        <div>
          <button
            onClick={() => this.setState({ number: this.state.number - 1 })}
            className="btn btn-warning"
          >
            Decrease
          </button>
          <button
            onClick={() => this.setState({ number: this.state.number + 1 })}
            className="btn btn-info"
          >
            Increase
          </button>
          <button
            onClick={() => this.setState({ like: this.state.like + 1 })}
            className="btn btn-danger"
          >
            Like
          </button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // console.log("componentDidMount parent");
  }
}
