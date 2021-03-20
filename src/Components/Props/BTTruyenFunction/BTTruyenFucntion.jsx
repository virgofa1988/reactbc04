import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import phoneData from '../../../data/phoneData.json'

export default class BTTruyenFucntion extends Component {
    render() {
        return (
            <div>
                <h3>Danh Sách Sản Phẩm</h3>
                <DanhSachSanPham />
            </div>
        )
    }
}
