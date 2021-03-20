import React, { Component } from "react";

export default class SanPhamGlass extends Component {
  render() {
    let { kinh, thuKinh } = this.props;

    return (
      <div className="col-4">
        <img
          width="200"
          src={kinh.url}
          alt={kinh.name}
          onClick={() => thuKinh(kinh)}
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  }
}
