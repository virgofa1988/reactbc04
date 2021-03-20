import React, { Component } from 'react'
//kết nối với react-redux
import { connect } from 'react-redux';

class ModalGioHangRedux extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((spGH, index) => {
            return (<tr>
                <th>{spGH.maSP}</th>
                <th>{spGH.tenSP}</th>
            </tr>)
        })
    }

    render() {
        //this.props.gioHang là thuộc tính nhận từ redux store

        return (
            <div>
                {this.renderGioHang()}
            </div>
        )
    }
}

const mapStateToProps = (state) => { //state: là store tổng ==> truy suất đến GioHangReducer => đến Biến state mình tạo ra (gioHang)
    return {
        gioHang: state.GioHangReducer.gioHang
    }
}
export default connect(mapStateToProps, null)(ModalGioHangRedux)
