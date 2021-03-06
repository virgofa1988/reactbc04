import React, { Component } from 'react'
import BT1Footer from '../BaiTapLayout1/BT1Footer'
import BT1Header from '../BaiTapLayout1/BT1Header'
import BTContent from './BTContent'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'

export default class BTThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <BTContent />
                <BTFooter />
            </div>
        )
    }
}
