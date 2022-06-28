import React, { Component } from "react";
import ChildProps from "./ChildProps";

export default class ParentProps extends Component {
    movie1 = {
        name: 'Em và Trịnh',
        imageUrl: 'https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/e/v/evt-_main_poster-_facebook_1__2.jpg'
    };
    movie2 = {
        name: 'Thế giới khủng long',
        imageUrl: 'https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/r/s/rsz_jurassic_world_dominion_-10062022_2.jpg'
    };
    movie3 = {
        name: 'Phi công siêu đẳng',
        imageUrl: 'https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/t/o/top_gun_maverick_-_poster_28.03_1__2.jpg'
    };
    
    showName = (name) => {
        alert(name)
    }

  render() {
    return (
      <div className="container my-5">
        <h4>PROPS</h4>
        <div className="row">
          <div className="col-4">
            <ChildProps movie={this.movie1} showName={this.showName}/>
          </div>
          <div className="col-4">
            <ChildProps movie={this.movie2} showName={this.showName}/>
          </div>
          <div className="col-4">
            <ChildProps movie={this.movie3} showName={this.showName}/>
          </div>
        </div>
      </div>
    );
  }
}
