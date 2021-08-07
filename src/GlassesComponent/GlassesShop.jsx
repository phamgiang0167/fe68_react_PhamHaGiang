import React, { Component } from 'react'
import GlassesInfo from './GlassesInfo'
import Header from './Header'
import ListGlasses from './ListGlasses'
import listGlasses from './dataGlasses.json'
import Model from './Model'
import './Styles/style.css'
export default class GlassesShop extends Component {
    state = {
        glasses: listGlasses[0]
    }
    chooseGlasses = (glasses) => {
        this.setState({
            glasses: glasses
        })
    }
    render() {
        const { glasses } = this.state 
        return (
            <div className="body container-fluid" style={{backgroundImage: "url(./glassesImage/background.jpg)"}}>
                <div className="overplay"></div>
                <Header />
                <div>
                    <div className="row">
                        <div className="col-6">
                            <div className="show">
                                <Model glasses={glasses}/>
                                <GlassesInfo glasses={glasses}/>
                            </div>                       
                        </div>
                        <div className="col-6 show">
                            <div className="show">
                                <Model glasses={glasses}/>
                            </div> 
                        </div>
                    </div>
                </div>
                <ListGlasses listGlasses={listGlasses} chooseGlasses={this.chooseGlasses}/>
            </div>
        )
    }
}
