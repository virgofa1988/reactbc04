import React, { Component } from 'react'
import BTCarousel from './BTCarousel'
import BTProduct from './BTProduct'

export default class BTProductList extends Component {
    movieArray = [{
        id: 1,
        title: "Movie Jay_A",
    }, {
        id: 2,
        title: "Movie Jay_B",
    }, {
        id: 3,
        title: "Movie Jay_C",
    }, {
        id: 4,
        title: "Movie Jay_D",
    }]
    render() {
        return (

            <div className="container mt-5">
                {/* BTCarousel */}
                {/* <BTCarousel /> */}
                {/* BTProductList */}
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTProduct title={this.movieArray[0].title} />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTProduct title={this.movieArray[1].title} />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTProduct title={this.movieArray[2].title} />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTProduct title={this.movieArray[3].title} />
                    </div>
                </div>
            </div>
        )
    }
}
