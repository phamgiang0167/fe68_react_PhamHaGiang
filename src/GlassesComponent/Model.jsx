import React, { Component } from 'react'

export default class Model extends Component {

    render() {
        const {glasses} = this.props
        return (
            <div className="model" style={{backgroundImage: "url(./glassesImage/model.jpg)"}}>
                <div className="model__glasses" style={{backgroundImage:`url(${glasses.url})`}}></div>
            </div>
        )
    }
}
