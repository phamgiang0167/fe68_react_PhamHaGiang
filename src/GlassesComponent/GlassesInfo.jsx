import React, { Component } from 'react'

export default class GlassesInfo extends Component {
    render() {
        const { glasses } = this.props
        return (
            <div className="info">
                <div className="info__name">
                    {glasses.name}
                </div>
                <div className="info__desc">
                    {glasses.desc}
                </div>
            </div>
        )
    }
}
