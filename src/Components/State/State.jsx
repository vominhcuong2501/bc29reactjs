import React, { Component } from 'react'

export default class State extends Component {
    state = {
        isShowMessage: true
    };
  
    handleHide = () => {
        const newState = {
            isShowMessage: false,
        };
        this.setState(newState)
    }

    handleShow = () => {
        const newState = {
            isShowMessage: true,
        };
        this.setState(newState)
    }
    
  render() {
    return (
      <div>
        <h4>State</h4>
        <div>
            <button onClick={()=> this.handleShow()} className='btn btn-primary'>Show</button>
            <button onClick={() => this.handleHide()} className='btn btn-danger'>Hidden</button>
        </div>
        {
            this.state.isShowMessage && (<p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ipsum facilis natus quas debitis temporibus vitae esse commodi, sit id quae aut mollitia aliquam corporis culpa accusamus perspiciatis porro pariatur?
            </p>)
        }
      </div>
    )
  }
}
