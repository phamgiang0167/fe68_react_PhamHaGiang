import React, { Component } from 'react'
export default class CarImage extends Component {
    render() {
        const { imgName } = this.props
        return (
            <div>
                <img src={`./images/${imgName}/civic-1.jpg`} className="w-100"alt="car" />
            </div>   
        )
    }
}
