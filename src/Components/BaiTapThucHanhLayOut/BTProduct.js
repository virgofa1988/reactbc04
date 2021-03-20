import React, { Component } from 'react'

export default class BTProduct extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <img className="card-img-top img-fluid" src="http://placehold.it/500x325" alt="Card Image" />
                <div className="card-body text-center">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse
                    necessitatibus
      neque.</p>
                </div>
                <div className="card-footer text-center">
                    <a type="button" className="btn btn-primary text-white">Find Out More!</a>
                </div>
            </div>


        )
    }
}
