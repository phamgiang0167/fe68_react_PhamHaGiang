import React, { Component } from 'react'

export default class ListWheel extends Component {
    render() {
        const { wheels, changeWheel} = this.props
        return (
            <div>
                <div className="card">
                    <div className="card-header text-left font-weight-bold">WHEELS</div>
                    <ul className="list-group list-group-flush">
                        {
                            wheels.map((wheel) => {
                                return(
                                    <li
                                        className="list-group-item wheel"
                                        onClick={() => changeWheel(wheel.idWheel)}
                                        key={wheel.idWheel}
                                    >
                                        <div className="row">
                                            <div className="col-2">
                                                <img src={wheel.img} width="60px" alt="wheel"/>
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-around">
                                                {wheel.title}
                                            </div>
                                            <div className="col-4 d-flex align-items-center">
                                                {wheel.price + ' $'}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
