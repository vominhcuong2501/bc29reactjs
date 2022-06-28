import React, { Component } from "react";

export default class ChildProps extends Component {
  render() {
    let {movie, showName} = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={movie.imageUrl} width={200} height={400} />
        <div className="card-body">
          <h4 className="card-title">{movie.name}</h4>
          <div>
            <button className="btn btn-info" onClick={() => showName(movie.name)}>Xem chi tiết</button>
          </div>
        </div>
      </div>
    );
  }
}
