import React, { Component } from'react';
import ChartComp from './ChartComp'

class Selector extends Component {
    constructor(){
        super()
        this.state ={
            deviceId: '1'
        }
        this.selectRef = React.createRef();
        this.namaDeviceRef = React.createRef();
        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        this.setState({
            deviceId: String(this.selectRef.current.value)
        })
        this.namaDeviceRef.current.innerHTML = this.selectRef.current.options[this.selectRef.current.selectedIndex].text;
        //console.log('Device change!');
    }

    render() {
        return(
            <div>
                <h3 className="centeredH1" id="namaDevice" ref={this.namaDeviceRef}>Unit_A1</h3>
                {/*<button onClick={()=> this.changeResult()}>penced akuh</button>*/}
                <div className="text-center">
                    <span>Choose Device: </span>
                    <select id="nama" ref={this.selectRef} onChange={this.changeName}>
                        <option value="1">Unit_A1</option>
                        <option value="2">Unit_A2</option>
                        <option value="3">Unit_B1</option>
                    </select>
                </div>
                <ChartComp selectedDevice={this.state.deviceId}/>
            </div>
        );
    }
}

export default Selector;