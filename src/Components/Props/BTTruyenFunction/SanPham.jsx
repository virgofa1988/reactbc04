import React, { Component } from 'react'

export default class SanPham extends Component {

    render() {
        let { dt, xemChiTiet } = this.props
        return (
            <div className="col-4">
                <div className="card ">
                    <img className="card-img-top" src={dt.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{dt.tenSP}</h4>
                        <p className="card-text">{dt.giaBan}</p>
                        <button type="button" class="btn btn-primary" onClick={() => xemChiTiet(dt)}>Detail...</button>
                    </div>
                </div>
            </div>
        )
    }
}
