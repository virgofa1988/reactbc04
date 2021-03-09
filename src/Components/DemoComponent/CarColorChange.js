import React, { Component } from 'react'

export default class CarColorChange extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: "../img/imgGame/imgRedCar.jpg"
        }
    }
    changeColor = (color) => {
        console.log(color);
        let imgSrc = "";
        switch (color) {
            case "red":
                imgSrc = "../img/imgGame/imgRedCar.jpg";
                break;
            case "grey":
                imgSrc = "../img/imgGame/imgSilverCar.jpg";
                break;
            case "black":
                imgSrc = "../img/imgGame/imgBlackCar.jpg";

        }
        console.log(imgSrc);
        this.setState({ img: imgSrc });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Please pick your favourite color</h3>
                        <img src={this.state.img} width={300} height={150} alt="Hello"></img>
                    </div>
                    <div className="col-md-6">
                        <h3>Please pick your favourite color</h3>
                        {/* callback function để trong các hàm sự kiện không có dấu ngoặc () vì nó sẽ gọi hàm và chạy hàm, do vậy ko truyền tham số. Nếu muốn truyền tham số phải sử dụng .bind or arrowfunction như bên dưới */}
                        {/* Tham số truyền vào callback function phải thông qua hàm .bind(this, thamso) or có thể dùng arrow function truyền vào hàm nặc danh để return 1 lệnh duy nhất cấu trúc ()=> callbackfunction(thamso) */}
                        <button onClick={this.changeColor.bind(this, "red")} className="btn btn-danger mx-4">Red Color</button>
                        <button onClick={() => this.changeColor("grey")} className="btn btn-secondary mx-4">Grey Color</button>
                        <button onClick={this.changeColor.bind(this, "black")} className="btn btn-dark mx-4">Black Color</button>
                    </div>
                </div>
            </div>
        )
    }
}
