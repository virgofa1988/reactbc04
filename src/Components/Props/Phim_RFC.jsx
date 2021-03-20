import React from 'react'

export default function Phim_RFC(props) {
    let { phim_input } = props; //ES6
    return (
        <div className="card">
            <img className="card-img-top" src={phim_input.hinhAnh} alt={phim_input.biDanh} />
            <div className="card-body">
                <h4 className="card-title">{phim_input.tenPhim}</h4>
                <p className="card-text">{phim_input.moTa}</p>
            </div>
        </div>

    )
}
