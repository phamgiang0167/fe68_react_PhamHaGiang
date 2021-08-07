import React, { Component } from 'react'
import CarImage from './CarImage'
import Infomation from './Infomation'
import ListColor from './ListColor'
import ListWheel from './ListWheel'
import listCars from './arrayFeatures.json'
import listWheels from './wheels.json'
import './style.css'
export default class CarStore extends Component {
    state = {
        "car": listCars[0]
    }
    
    color = "Black"
    wheelId = 1

    getColors = () =>{
        let colors = []
        listCars.forEach(car => {
            colors.push({"color" : car.color, "img": car.img})
        })
        return colors
    }

    reRender = () => {
        const color = this.color
        const wheelId = this.wheelId

        //Find car type
        const carUpdate = listCars.find((car) => {
            return car.color === color
        })

        //find wheel
        const wheels = carUpdate.wheels
        let wheelPicked = wheels.find((wheel) => {
            return wheel.idWheel === wheelId
        })

        carUpdate.srcImg = wheelPicked.srcImg
        
        //set state
        this.setState({
            "car": carUpdate
        })
        
    }
    changeColor = async (color) => {
        this.color = await color
        this.reRender()
    }

    changeWheel = async (wheelId) =>{
        this.wheelId = await wheelId
        this.reRender()
    }
    render() {
        const { car } = this.state
        const listColor = this.getColors()
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-7">
                            <CarImage imgName={car.srcImg}/>
                            <Infomation car={car}/>
                        </div>
                        <div className="col-5">
                            <ListColor changeColor={this.changeColor} listColor={listColor}/>
                            <ListWheel wheels={listWheels} changeWheel={this.changeWheel}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
