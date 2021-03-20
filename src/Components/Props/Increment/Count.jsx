import React, { Component } from 'react'
import "../Increment/Count.css";
export default class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            red: false,
        }
    }

    increment = () => {
        this.setState({
            count: (this.state.count + 1),
            red: (!this.state.red),
        }, (console.log(this.state.count, this.state.red)))
    }
    render() {
        return (
            <div>
                <h3 className={this.state.red ? "red" : ""}>Change My Color</h3>
                <h3>{this.state.count}</h3>
                <button className="btn btn-info" onClick={() => this.increment()}>Increment</button>
            </div>

        )
    }
}
