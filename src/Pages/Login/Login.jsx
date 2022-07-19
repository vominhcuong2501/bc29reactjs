import React, { Component } from 'react'
import { withRoute } from '../../HOC/withRouter';

class Login extends Component {
    // https://reactjs.org/docs/higher-order-components.html
    handleLogin = () => {
        const username = 'admin';
        const password = 'admin';
        if(username === 'admin' && password === 'admin') {
            // navigate sang home
            this.props.navigate('/home')
        }
    }
    render() {
        return (
        <div>
            <button onClick={this.handleLogin} className='btn btn-primary'>Login</button>
        </div>
        )
    }
}

export default withRoute(Login)