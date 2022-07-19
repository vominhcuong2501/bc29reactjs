import React, { Component } from 'react'
import { withRoute } from '../../HOC/withRouter'

class MovieDetail extends Component {
  render() {
    return (
      <div>
        <p>Movie Id: {this.props.params.id}</p>
      </div>
    )
  }
}
export default withRoute(MovieDetail)