import React, { Component } from 'react'

export default class Infomation extends Component {
    render() {
        const { car } = this.props
        return (
            <table className="table text-left">
                <thead>
                    <tr>
                        <th colSpan="3">See More LX Features</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">Color</td>
                        <td>{car.color}</td>
                    </tr>
                    <tr>
                        <td scope="row">Price</td>
                        <td>{car.price + " $"}</td>
                    </tr>
                    <tr>
                        <td scope="row">Engine Type</td>
                        <td>{car.engineType}</td>
                    </tr>
                    <tr>
                        <td scope="row">Displacement</td>
                        <td>{car.displacement}</td>
                    </tr>
                    <tr>
                        <td scope="row">Horsepower(SAE net)</td>
                        <td>{car.horsepower}</td>
                    </tr>
                    <tr>
                        <td scope="row">Torque (SAE net)</td>
                        <td>{car.torque}</td>
                    </tr>
                    <tr>
                        <td scope="row">Redline</td>
                        <td>{car.redline}</td>
                    </tr>
                    
                </tbody>
            </table>
        )
    }
}
