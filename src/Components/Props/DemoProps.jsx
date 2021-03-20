import React, { Component } from 'react'
import data from "../../data/data.json";
import Phim_RCC from './Phim_RCC';
import Phim_RFC from './Phim_RFC';
export default class DemoProps extends Component {
    //Param
    constructor(props) {
        super(props);
    }
    //Property
    state = {
        mangPhim: data,
    }
    //Method
    renderPhim = () => {
        return this.state.mangPhim.map((phim, index) => {
            return (
                <div className=" col-sm-12 col-md-4 col-lg-3">
                    {/* <Phim_RFC phim_input={phim} /> */}
                    <Phim_RCC phim_input={phim} />
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
