import React, { Component } from "react";

export default class Databinding extends Component {
  sinhVien = {
    ma: 1,
    ten: "Nguyen Van A",
  };

  renderSinhVien = () => {
    let sinhVien = {
      ma: 2,
      ten: "Nguyen Van B",
      img: "http://picsum.photos/100/100",
    };
    return (
      <div className="card text-left w-25">
        <img className="card-img-top" src={sinhVien.img} alt={sinhVien.img} />
        <div className="card-body bg-dark">
          <h4 className="card-title">{sinhVien.ten}</h4>
          <p className="card-text">Body</p>
        </div>
      </div>
    );
  };

  //Databinding là cơ chế hiển thị dữ liệu lên thành phần giao diện
  render() {
    let name = "Nguyen Anh Tuan";
    let product = {
      id: 1,
      name: "IphoneX",
      price: 1000,
      img: "https://picsum.photos/100/100",
    };
    let renderProduct = () => {
      //Khi nội dung return là component thì phải bao phủ bới 1 thẻ
      return (
        <div>
          <p>{product.name}</p>
        </div>
      );
    };
    return (
      <div className="container">
        <ul>
          <li>Ma Sinh Vien : {this.sinhVien.ma}</li>
          <li>Ten Sinh Vien: {this.sinhVien.ten}</li>
        </ul>
        <p id="title">{name}</p>
        <br />
        <div className="card text-left w-25">
          <img className="card-img-top" src={product.img} alt={product.img} />
          <div className="card-body bg-dark">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.price}</p>
          </div>
        </div>
        {renderProduct()}
        {this.renderSinhVien()}
      </div>
    );
  }
}
