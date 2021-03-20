import React, { Component } from "react";

export default class BT1LaptopDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { sanPhamLT, xemChiTiet, themGioHang } = this.props
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 img-fluid ">

        <div className="card bg-light m-auto my-2 img-fluid" style={{ width: 300, padding: 7 }}>
          <img
            className="card-img-top"
            src={sanPhamLT.hinhAnh}
            alt={sanPhamLT.tenSP}
            style={{ maxWidth: "100%", height: 250 }}
          />
          <div className="card-body text-center">
            <h4 className="card-title text-center">{sanPhamLT.tenSP} {sanPhamLT.maSP}</h4>
            <p style={{ height: 77, }} className="card-text">
              The {sanPhamLT.tenSP} Carbon is a high-end notebook computer released
                by {sanPhamLT.tenSP} in 2012
              </p>
            <a href="#" className="btn btn-primary mx-2" onClick={() => { themGioHang(sanPhamLT) }} >
              Thêm Giỏ Hàng
            </a>
            <a href="#" className="btn btn-success" data-toggle="modal" data-target="#modelId" onClick={() => { xemChiTiet(sanPhamLT) }}>
              Details...
              </a>
          </div>
        </div>

      </div >
    );
  }
}
