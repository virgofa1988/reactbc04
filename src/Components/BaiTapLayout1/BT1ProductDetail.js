import React, { Component } from "react";
import ProductModel from "./ProductModel";


export default class BT1ProductDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    let { sanPham, xemChiTiet, themGioHang } = this.props;
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 img-fluid">
        <div className="card bg-light m-auto my-2 img-fluid" style={{ width: 300, padding: 5 }} >
          <img
            className="card-img-top"
            src={sanPham.hinhAnh}
            alt={sanPham.tenSP}
            style={{ maxWidth: "100%", height: 250 }}
          />
          <div className="card-body text-center">
            <h4 className="card-title text-center">{sanPham.tenSP}</h4>
            <p className="card-text">
              {sanPham.tenSP} features a new all-screen design. Face ID{sanPham.maSP}, which makes
              your face your password
              </p>
            <div className="d-flex justify-content-center"><p href="#" className="btn btn-primary mx-2" onClick={() => themGioHang(sanPham)} > Thêm Giỏ Hàng
            </p>
              <p className="btn btn-success" data-toggle="modal" data-target="#modelId" onClick={() => xemChiTiet(sanPham)}>Details</p>
            </div>


          </div>
        </div>
      </div>
    );
  }
}
