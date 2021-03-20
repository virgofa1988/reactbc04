import React, { Component } from "react";
import BT1Footer from "./BT1Footer";
import BT1Header from "./BT1Header";
import BT1LaptopList from "./BT1LaptopList";
import BT1ProductList from "./BT1ProductList";
import BT1Slider from "./BT1Slider";
import CartModal from "./CartModal";
import ProductModel from "./ProductModel";

export default class BT1Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamModal: { maSP: 1, tenSP: "Black Berry", hinhAnh: './img/sp_blackberry.png', giaSP: 1000 },
      gioHang: []
    }

  }
  xemChiTiet = (sanPham) => {
    this.setState({
      sanPhamModal: sanPham,

    })
  }
  themGioHang = (sanPhamThem) => {
    // B1: Từ sản Phẩm thêm vào, tạo ra 1 sản  Phẩm giỏ hàng để so sánh với mảng giỏ hàng
    let spClick = {
      maSP: sanPhamThem.maSP,
      tenSP: sanPhamThem.tenSP,
      hinhAnh: sanPhamThem.hinhAnh,
      giaSP: sanPhamThem.giaSP,
      soLuong: sanPhamThem.soLuong
    }
    // B2: Kiểm tra xem spClick có trong giỏ hàng hay ko
    // let gioHangCapNhat = [...this.state.gioHang] // Bước này là để sử dụng giỏ hàng khỏi cần this.state chứ ko có gì cả. vẫn là giorHang ban đầu.

    //Tìm nó với index 
    let index = this.state.gioHang.findIndex(sp => sp.maSP === spClick.maSP);
    //Tìm thấy đã có trong giỏ
    if (index !== -1) {
      this.state.gioHang[index].soLuong += 1;
    } else {
      //Sản phẩm chưa có trong giỏ hàng thì push nó vào mảng
      this.state.gioHang.push(spClick);
    }
    //Sản Pharm Click đã được cập nhật lại trong state nhưng muốn render lại UI cần đưa vào setState cập nhật lại
    this.setState({
      gioHang: this.state.gioHang
    })
  }
  //Cách 1- Tang giam số lượng trong 1 hàm
  tangGiamSL = (maSP, tangOrGiam) => { //Biến tăng or giảm để xác định hàm tăng hay giảm. True là Tăng, False là Giảm
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
    if (tangOrGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else if (gioHangCapNhat[index].soLuong > 1) {
      gioHangCapNhat[index].soLuong -= 1;
    }
    //Cập Nhật lại giá trị và render lại UI Modal
    this.setState({
      gioHang: gioHangCapNhat
    })
  }
  // // Cách 2-Tăng và giảm 2 hàm Riêng
  // //Tăng số lượng 
  // tangCount = (sanPhamSLTang) => {
  //   let index = this.state.gioHang.findIndex(sp => sp.maSP === sanPhamSLTang.maSP);
  //   if (index !== -1) {
  //     this.state.gioHang[index].soLuong += 1;
  //   }
  //   this.setState({
  //     gioHang: this.state.gioHang
  //   })
  // }
  // //GIảm số lượng 
  // giamCount = (sanPhamSLGiam) => {
  //   //Lấy số lượng của SP đang có trong giỏ hàng khi click giảm
  //   let slClick = sanPhamSLGiam.soLuong;
  //   //Lấy index để xác định sp nào trong rổ hàng
  //   let index = this.state.gioHang.findIndex(sp => sp.maSP === sanPhamSLGiam.maSP);
  //   //Sau khi tìm dc index tức xác định đc vị trí sp dg y/c giảm sl , kiểm tra tiếp xem sl thực tế dang là bao nhiêu, và phải >=1 để có thể giảm tối đa về 0
  //   if (index !== -1 && (slClick >= 1)) {
  //     this.state.gioHang[index].soLuong -= 1;
  //   }
  //   this.setState({
  //     gioHang: this.state.gioHang
  //   })
  // }
  //Xoa san Pham
  xoaSanPham = (sanPhamXoa) => {
    //Cach 1
    // let index = this.state.gioHang.findIndex(sp => sp.maSP === sanPhamXoa.maSP);
    // if (index !== -1) {
    //   this.state.gioHang.splice(index, 1);
    // }
    //cach 2 - filter() -- nó sẽ chạy vòng lặp giữ lại các sp mà thoả điều kiện ( ở đây là các sp có maSP khác với maSP đc truyền từ hàm xóa lên sẽ đc giữ lại, cái nào trùng sẽ bị loại bỏ)
    this.setState({
      gioHang: this.state.gioHang.filter(sp => sp.maSP !== sanPhamXoa.maSP)
    })
  }

  //Mảng Laptop
  mangSPLT = [{
    maSP: 'LT1', tenSP: "HP", hinhAnh: './img/lt_hp.png', giaSP: 16000000, soLuong: 1
  }, {
    maSP: 'LT2', tenSP: "Lenovo", hinhAnh: './img/lt_lenovo.png', giaSP: 19000000, soLuong: 1
  }, {
    maSP: 'LT3', tenSP: "MacBook ", hinhAnh: './img/lt_macbook.png', giaSP: 24000000, soLuong: 1
  }, {
    maSP: 'LT4', tenSP: "Asus Rog", hinhAnh: './img/lt_rog.png', giaSP: 18000000, soLuong: 1
  }]
  //Mảng Phone
  mangSPPhone = [{
    maSP: "P1", tenSP: "Black Berry", hinhAnh: './img/sp_blackberry.png', giaSP: 10000000, soLuong: 1
  }, {
    maSP: "P2", tenSP: "Iphone X", hinhAnh: './img/sp_iphoneX.png', giaSP: 12000000, soLuong: 1
  }, {
    maSP: "P3", tenSP: "SamSung Note 7", hinhAnh: './img/sp_note7.png', giaSP: 14000000, soLuong: 1
  }, {
    maSP: "P4", tenSP: "Vivo 850", hinhAnh: './img/sp_vivo850.png', giaSP: 8000000, soLuong: 1
  },]
  render() {
    //Tính tổng số lượng giỏ hàng
    let tongSLGH = this.state.gioHang.reduce((tsl, spGH, index) => {
      return tsl += spGH.soLuong;
    }, 0)
    return (
      <div>
        <BT1Header />
        {/* <BT1Slider /> */}

        <section className="container-fluid">
          <div className="row">
            <hr className="mt-2" />
            <h3 className="text-center text-danger" data-toggle="modal" data-target="#modelId_Cart" style={{ cursor: "pointer" }}>Giỏ Hàng ({tongSLGH})</h3>
            <h3 className="text-center display-4 font-weight-bold  text-success my-3">Laptop</h3>
            <BT1LaptopList mangSPLT={this.mangSPLT} xemChiTiet={this.xemChiTiet} themGioHang={this.themGioHang} />
          </div>
          <hr />
          <h3 className="text-center display-4 font-weight-bold text-success my-3">Mobile Phone</h3>
          <div className="row">
            <BT1ProductList xemChiTiet={this.xemChiTiet} mangSP={this.mangSPPhone} themGioHang={this.themGioHang} />
          </div>
        </section>

        <ProductModel sanPhamModal={this.state.sanPhamModal} />
        <CartModal gioHang={this.state.gioHang} tangGiamSL={this.tangGiamSL} xoaSanPham={this.xoaSanPham} />
        <BT1Footer />
      </div >
    );
  }
}
