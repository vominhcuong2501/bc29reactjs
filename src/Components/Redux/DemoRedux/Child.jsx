import React, { Component } from 'react';
import { connect } from 'react-redux';

class Child extends Component {
  render() {
    return (
      <div>
        <button className='btn btn-primary mr-2' onClick={() => this.props.decrease()}>Decrease</button>
        <button className='btn btn-info mr-2' onClick={() => this.props.increase()}>Increase</button>
        <button className='btn btn-warning mr-2' onClick={() => this.props.random(Math.random())}>Random</button>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        increase: () => {
            let action = {
                type: 'INCREASE',
                
            }
            dispatch(action)
        },

        decrease: () => {
            let action = {
                type: 'DECREASE'
            }
            dispatch(action)
        },

        random: (newCount) => {
            let action = {
                type: 'RANDOM',
                payload: newCount
            }
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(Child)