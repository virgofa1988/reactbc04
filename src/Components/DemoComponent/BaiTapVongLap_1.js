import React, { Component } from 'react'
import data from "../../data/data.json";

export default class BaiTapVongLap_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangPhim: data
        }
    }

    renderPhim = () => {
        return this.state.mangPhim.map((phim, index) => {
            return (
                <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
                    <div className="card">
                        <img className="card-img-top" src={phim.hinhAnh} width={200} height={100} alt={phim.biDanh} />
                        <div className="card-body">
                            <h4 className="card-title">{phim.tenPhim.length > 20 ? phim.tenPhim.substring(0, 20) + "..." : phim.tenPhim}</h4>
                            <p className="card-text">{phim.moTa.length > 100 ? phim.moTa.substring(0, 100) + "..." : phim.moTa}</p>
                        </div>
                    </div>
                </div>

            )

        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>


        )
    }
}
