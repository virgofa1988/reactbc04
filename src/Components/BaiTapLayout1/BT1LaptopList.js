import React, { Component } from "react";
import BT1LaptopDetail from "./BT1LaptopDetail";

export default class BT1LaptopList extends Component {
  render() {
    return (
      <section
        id="laptop"
        className="container-fluid pt-5 pb-5 bg-light text-dark"
      >
        <h1 className="text-center">BEST LAPTOP</h1>
        <div className="row container-fluid">
          <BT1LaptopDetail />
          <BT1LaptopDetail />
          <BT1LaptopDetail />
          <BT1LaptopDetail />
        </div>
      </section>
    );
  }
}
