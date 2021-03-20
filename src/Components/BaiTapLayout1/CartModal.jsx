import React, { Component } from 'react'

export default class CartModal extends Component {


    render() {
        let { gioHang, xoaSanPham, tangGiamSL } = this.props;

        return (

            <div>

                {/* Modal */}
                <div className="modal fade " id="modelId_Cart" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ Hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table class="table table-primary table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Mã Sản Phẩm</th>
                                            <th>Hình Ảnh</th>
                                            <th>Tên Sản Phẩm</th>
                                            <th>Số Lượng</th>
                                            <th>Đơn Giá</th>
                                            <th>Thành Tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {gioHang.map((sanPham, index) => {
                                            return <tr className="text-left" key={index}>
                                                <td>{sanPham.maSP}</td>
                                                <td><img width="80" src={sanPham.hinhAnh}></img></td>
                                                <td>{sanPham.tenSP}</td>
                                                <td>
                                                    <button type="button" class="btn btn-primary mx-2" onClick={() => tangGiamSL(sanPham.maSP, false)}>-</button>
                                                    {sanPham.soLuong}
                                                    <button type="button" class="btn btn-primary mx-2" onClick={() => tangGiamSL(sanPham.maSP, true)}>+</button></td>
                                                <td >{sanPham.giaSP.toLocaleString()}</td>
                                                <td>{(sanPham.giaSP * sanPham.soLuong).toLocaleString()}</td>

                                                <td><button type="button" className="btn btn-danger" onClick={() => xoaSanPham(sanPham)}>Xoá</button>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="5"></td>
                                            <td>Tổng Tiền : </td>
                                            <td>{this.props.gioHang.reduce((tongTien, sanPham, index) => {
                                                return tongTien += (sanPham.giaSP * sanPham.soLuong);
                                            }, 0).toLocaleString()}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
