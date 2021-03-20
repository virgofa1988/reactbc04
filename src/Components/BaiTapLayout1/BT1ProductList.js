import React, { Component } from "react";
import BT1ProductDetail from "./BT1ProductDetail";

export default class BT1ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { mangSP, xemChiTiet, themGioHang } = this.props;

    return mangSP.map((sanPham, index) => {
      return (
        <BT1ProductDetail key={index} sanPham={sanPham} xemChiTiet={xemChiTiet} themGioHang={themGioHang} />
      );
    })

  }
}
