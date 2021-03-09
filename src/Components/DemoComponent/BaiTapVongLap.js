import React, { Component } from 'react'

export default class BaiTapVongLap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mangDienThoai: [
                { maSP: 1, tenSP: "Iphone", gia: 1000 },
                { maSP: 2, tenSP: "SamSung", gia: 1200 },
                { maSP: 3, tenSP: "Sony", gia: 1400 }
            ]
        }
    }
    // Viết phương thức render các object thành các tag sản phẩm
    renderSanPham = () => {

        //Cách 1 sử dụng vòng lập for và push để đưa vào mảng
        // let contentTable = [];
        // for (let index = 0; index < this.state.mangDienThoai.length; index++) {

        //     const sanPham = this.state.mangDienThoai[index];
        //     contentTable.push(
        //         <tr>
        //             <td>{sanPham.maSP}</td>
        //             <td>{sanPham.tenSP}</td>
        //             <td>{sanPham.gia}</td>
        //         </tr>
        //     );
        // }
        // console.log(contentTable);
        // return contentTable;

        //Cách 2 dùng map()
        return this.state.mangDienThoai.map((sanPham, index) => {
            return (
                <tr key={index}>
                    <td>{sanPham.maSP}</td>
                    <td>{sanPham.tenSP}</td>
                    <td>{sanPham.gia}</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div className="container">
                <table className="table table-hover table-dark table-striped text-center">
                    <thead>
                        <tr>
                            <th>Mã Sản Phẩm</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Giá Sản Phẩm</th>
                        </tr>
                    </thead>
                    <tbody style={{ cursor: 'pointer' }}>
                        {this.renderSanPham()}
                    </tbody>
                </table>
            </div >
        )
    }
}
