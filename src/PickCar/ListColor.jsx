import React, { Component } from 'react'
export default class ListColor extends Component {
    render() {
        const { changeColor, listColor } = this.props
        return (
            <div className="card">
                <div className="card-header text-left font-weight-bold">Exterior Color</div>
                <ul className="list-group list-group-flush">
                    {listColor.map((color, index) => {
                        return (
                            <li
                                className="list-group-item color"
                                onClick={() => changeColor(color.color)}
                                key={index}
                            >
                                <div className="row">
                                    <div className="col-2">
                                        <img src={color.img} width="60px" alt="color"/>
                                    </div>
                                    <div className="col-10 d-flex align-items-center">
                                        {color.color}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
