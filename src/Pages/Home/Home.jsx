import React, { Component } from "react";
import { withRoute } from "../../HOC/withRouter";

class Home extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}
export default withRoute(Home)
