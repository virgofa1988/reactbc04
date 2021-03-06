import React, { Component } from 'react'

export default class BTHeader extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    {/* Brand */}
                    <a className="navbar-brand" href="https://startbootstrap.com/previews/heroic-features">Start Bootstrap</a>
                    {/* Collap Button */}
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive"><span className="navbar-toggler-icon"> </span></button>
                    {/* Responsive Link */}
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="navbar-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="navbar-item ">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="navbar-item ">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="navbar-item ">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}
