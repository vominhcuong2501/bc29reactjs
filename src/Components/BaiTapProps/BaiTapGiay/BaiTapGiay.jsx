import React, { Component } from "react";
import dataGiay from "../../../Data/DataGiay.json";
import Giay from "./Giay";

export default class BaiTapGiay extends Component {
    colors = ["primary", "success", 'danger']

  renderShoesList = () => {
    return dataGiay.map((ele, index) => {
        return (<div className="col-4" key={index}>
        <Giay item={ele} showDescription={this.showDescription}>
            {
                this.colors.map((item, index) => {
                    return <span key={index} className={`badge badge-${item}`}>{item}</span>
                })
            }
        </Giay>
      </div>)
    })
  };

  showDescription = (description) => {
    alert(description)
  }

  render() {
    return (
      <div className="row">
        {this.renderShoesList()}
      </div>
    );
  }
}
