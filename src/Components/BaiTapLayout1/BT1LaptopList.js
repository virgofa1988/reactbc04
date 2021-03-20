import React, { Component } from "react";
import BT1LaptopDetail from "./BT1LaptopDetail";

export default class BT1LaptopList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { mangSPLT, xemChiTiet, themGioHang } = this.props;
    return mangSPLT.map((sanPham, index) => {
      return (

        <BT1LaptopDetail key={index} sanPhamLT={sanPham} xemChiTiet={xemChiTiet} themGioHang={themGioHang} />
      )
    })

  }
}
