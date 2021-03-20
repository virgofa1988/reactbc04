import React, { Component } from "react";
import SanPhamGlass from "./SanPhamGlass";

export default class DanhSachGlasses extends Component {
  render() {
    let { arrProduct, thuKinh } = this.props;
    let renderGlassesList = () => {
      return arrProduct.map((kinh, index) => {
        return <SanPhamGlass kinh={kinh} key={index} thuKinh={thuKinh} />;
      });
    };
    return (
      <div className="row" style={{ height: "100%" }}>
        {renderGlassesList()}
      </div>
    );
  }
}
