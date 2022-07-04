import React, { Component } from 'react';
import Child from './Child';
import {connect} from 'react-redux';

class Parent extends Component {
  render() {
    return (
      <div>
        <h4>Demo REDUX</h4>
        <p>Current count: {this.props.countRedux}</p>
        <Child />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        countRedux: state.countReducer.count
    }
}
const parentReduxComponent = connect(mapStateToProps, null)(Parent)
export default  parentReduxComponent