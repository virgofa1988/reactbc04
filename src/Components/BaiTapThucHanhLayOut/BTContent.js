import React, { Component } from 'react'
import BTCarousel from './BTCarousel'
import BTProductList from './BTProductList'

export default class BTContent extends Component {
    render() {
        return (
            <div style={{ marginTop: '5.5rem' }} >
                <BTCarousel />
                <BTProductList />
            </div>


        )
    }
}
