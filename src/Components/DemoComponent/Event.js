import React, { Component } from 'react'

export default class Event extends Component {
    // Các Thuộc Tính
    constructor(props) {
        super(props);
        //this.state là 1 thuộc tính sẵn có của Reacts mình kế thừa
        this.state = { // Tất cả các biến thay đổi sẽ được đưa vào trong state
            isLogin: false,
            userName: "Khai"

        }
    }
    // Phương thức
    //set.state() là 1 phương thức kế thừa từ component mặc định của reactjs => thay đổi giá trị state và gọi hàm render -> render lại giao diện
    //set.state() là 1 phương thức bất động bộ. muốn kiểm tra this.state phải sử dụng 1 hàm callback làm tham số thứ 2 của hàm setstate();
    login = () => {
        this.setState({
            isLogin: true,
            userName: "Jay Nguyen"
        }, () => { console.log(this.state) });

    }
    logout = () => {
        this.setState({
            isLogin: false,
            userName: ""
        }, () => { console.log(this.state) })
    }
    render() {
        return (
            <div>
                { this.state.isLogin ? <div>Hello {this.state.userName} <br /><button className="btn btn-danger" onClick={this.logout}>Logout</button> </div> : <button className="btn btn-primary" onClick={this.login}>Login</button>}
            </div>
        )
    }
}


