import React, { Component } from 'react'
import phoneData from '../../../data/phoneData.json'
import SanPham from './SanPham';
export default class DanhSachSanPham extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sanPhamChiTiet: phoneData[0]
        }
    }
    renderSanPham = () => {
        return phoneData.map((dt, index) => {
            return (
                <SanPham key={index} dt={dt} xemChiTiet={this.xemChiTiet} />
            )
        })
    }
    //Xu ly button detail
    //Dữ liệu cần lấy ở component DanhSachSanPham => đặt callback function tại DanhSachSanPham
    xemChiTiet = (sanPham) => {
        console.log(sanPham);
        //Thay đổi giá trị phone xemChitiet
        this.setState({
            sanPhamChiTiet: sanPham
        })
    }
    render() {
        let { maSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, giaBan, tenSP, hinhAnh } = this.state.sanPhamChiTiet;
        return (
            <div className="container">
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <hr />
                <div className="row my-3">
                    <div className="col-4 text-center">
                        <h3>{tenSP}</h3>
                        <img width={400} src={hinhAnh} alt={tenSP} />
                    </div>
                    <div className="col-8">
                        <h3>Product Configuration</h3>
                        <table className="table table-dark table-responsive table-hover">
                            <tr>
                                <th>Màn hình</th>
                                <th>{manHinh}</th>
                            </tr>
                            <tr>
                                <th>Hệ Điều Hành</th>
                                <th>{heDieuHanh}</th>
                            </tr>
                            <tr>
                                <th>Camera Trước</th>
                                <th>{cameraTruoc}</th>
                            </tr>
                            <tr>
                                <th>Camera Sau</th>
                                <th>{cameraSau}</th>
                            </tr>
                            <tr>
                                <th>Ram</th>
                                <th>{ram}</th>
                            </tr>
                            <tr>
                                <th>Rom</th>
                                <th>{rom}</th>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <th>{giaBan}</th>
                            </tr>
                            <tr>
                                <th>Product Code</th>
                                <th>{maSP}</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
