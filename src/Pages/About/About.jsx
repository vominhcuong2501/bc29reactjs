import React, { Component } from 'react'
import { withRoute } from '../../HOC/withRouter'

class About extends Component {
  
  render() {
    // console.log(this.props.searchParams)
    return (
      <div>
        <p>Keyword: {this.props.searchParams.get('keyword')}</p>
        <p>UserId: {this.props.searchParams.get('userId')}</p>
        <p>MovieId: {this.props.searchParams.get('movieId')}</p>
      </div>
    )
  }
}

export default withRoute(About)
