import React, { Component } from 'react'

export default class Phim_RCC extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { hinhAnh, tenPhim, moTa, biDanh } = this.props.phim_input; //ES6 Bóc tách các thuộc tính theo cách khai báo mới ES6
        return (
            <div className="card">
                <img className="card-img-top" src={hinhAnh} alt={biDanh} />
                <div className="card-body">
                    <h4 className="card-title">{tenPhim}</h4>
                    <p className="card-text">{moTa.length > 100 ? moTa.substring(0, 100) + "...." : moTa}</p>
                    <button type="button" class="btn btn-primary">Detail...</button>
                </div>
            </div>

        )
    }
}
