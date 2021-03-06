import React, { Component } from "react";
import BT1ProductDetail from "./BT1ProductDetail";

export default class BT1ProductList extends Component {
  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row container-fluid">
          <BT1ProductDetail />
          <BT1ProductDetail />
          <BT1ProductDetail />
          <BT1ProductDetail />
        </div>
      </section>
    );
  }
}
