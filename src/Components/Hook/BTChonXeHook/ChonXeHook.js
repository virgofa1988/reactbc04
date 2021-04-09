import React, { useState } from 'react'

export default function ChonXeHook() {


    let [carColor, setcarColor] = useState({ src: "./img/car/products/black-car.jpg" })
    const chonMauXe = (mauXe) => {
        let srcUpdate = `./img/car/products/${mauXe}-car.jpg`;
        setcarColor(
            { ...carColor, src: srcUpdate }
        )
        console.log(mauXe)
    }

    return (
        <div className="container">
            <h1>Bài Tập Chọn Màu Xe Sử Dụng Hook</h1>
            <div className="row">
                <div className="col-6">
                    <h3>Xe Mẫu</h3>
                    <img width="100%" src={carColor.src}></img>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center" style={{ paddingRight: "40%" }}>
                    <button className="btn btn-light" onClick={() => {
                        chonMauXe("silver")
                    }}>White</button>
                    <button className="btn btn-dark" onClick={() => {
                        chonMauXe("black")
                    }}>Black</button>
                    <button className="btn btn-danger"
                        onClick={() => {
                            chonMauXe("red")
                        }}>Red</button>
                    <button className="btn btn-secondary"
                        onClick={() => {
                            chonMauXe("steel")
                        }}>Silver</button>
                </div>
            </div>
        </div>
    )
}
