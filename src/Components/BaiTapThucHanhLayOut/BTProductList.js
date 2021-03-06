import React, { Component } from 'react'
import BTCarousel from './BTCarousel'
import BTProduct from './BTProduct'

export default class BTProductList extends Component {
    render() {
        return (

            <div className="container mt-5">
                {/* BTCarousel */}
                {/* <BTCarousel /> */}
                {/* BTProductList */}
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTProduct />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTProduct />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTProduct />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTProduct />
                    </div>
                </div>
            </div>
        )
    }
}
