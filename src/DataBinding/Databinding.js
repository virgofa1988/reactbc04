import React, { Component } from "react";

export default class Databinding extends Component {
  // Thuộc tính của class Databinding
  sinhVien = {
    ma: 1,
    ten: "Nguyen Van A",
  };

  // Phương Thức của class DataBinding
  renderSinhVien = () => {
    let sinhVien = {
      ma: 2,
      ten: "Nguyen Van B",
      img: "http://picsum.photos/100/100",
    };
    return (
      <div className="card text-left">
        <img className="card-img-top img-fluid" src={sinhVien.img} alt={sinhVien.img} />
        <div className="card-body bg-light">
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
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="card text-left">
              <img className="card-img-top img-fluid" src={product.img} alt={product.img} />
              <div className="card-body bg-light">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.price}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            {this.renderSinhVien()}
          </div>
          <div className="col-sm-4 col-md-4 bg-light">
            <ul>
              <li>Ma Sinh Vien : {this.sinhVien.ma}</li>
              <li>Ten Sinh Vien: {this.sinhVien.ten}</li>
            </ul>
            <p id="title">{name}</p>
            {renderProduct()}
          </div>
        </div>
      </div>
    );
  }
}
