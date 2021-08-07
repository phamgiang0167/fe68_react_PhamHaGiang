import React, { Component } from 'react'

export default class ListGlasses extends Component {
    renderGlasses = (listGlasses, callback) => {
        return listGlasses.map((glasses) => {
            return (
                <div className="glasses" key={glasses.id}>
                    <div 
                        className="glasses__img" 
                        style={{backgroundImage: `url(${glasses.url})`}} 
                        onClick={() => callback(glasses)}>
                    </div>
                </div>
                
            )
        })
    }
    render() {
        const { listGlasses, chooseGlasses }= this.props
        // console.log(listGlasses)
        return (
            <div className="list__glasses">
                {this.renderGlasses(listGlasses, chooseGlasses)}
            </div>
        )
        
    }
}
