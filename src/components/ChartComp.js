import React, { Component } from 'react'
import Chart from "chart.js";
//import { timestampBuff_Unit_A1,Buff_Unit_A1 } from './RandomGen'
import { localDataset } from './WebSocketFetcher';

import classes from "./ChartComp.module.css";

Chart.defaults.global.elements.line.tension = 0;
Chart.defaults.global.animation.duration = 0;

let theChart;
let theSelectedDevice;
let theDataset,theTimestamp;
let thelabel1Ref, thelabel2Ref, thelabel3Ref, thelabel4Ref;

class ChartComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            deviceId: '1'
        }
        this.refSelector = React.createRef();
        this.label1Ref = React.createRef();
        this.label2Ref = React.createRef();
        this.label3Ref = React.createRef();
        this.label4Ref = React.createRef();
        //this.changeDevice = this.changeDevice.bind(this);
    }
    static getDerivedStateFromProps(props,state){
        if (props.selectedDevice !== state.deviceId) {
            return {
                deviceId: String(props.selectedDevice),
            };
          }
        
        return null;
    }
    
    chartCompTimer=0;
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }
    componentDidUpdate() {
        clearInterval(this.chartCompTimer);
        this.buildChart();
        //console.log(`Device change to : ${this.state.deviceId}`);
    }
    componentWillUnmount(){
        clearInterval(this.chartCompTimer);
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        theSelectedDevice = this.state.deviceId;
        thelabel1Ref = this.label1Ref;
        thelabel2Ref = this.label2Ref;
        thelabel3Ref = this.label3Ref;
        thelabel4Ref = this.label4Ref;

        this.chartCompTimer = setInterval(function(){
            //console.log(`Device change to : ${theSelectedDevice}`);
            switch (theSelectedDevice) {
                case '1':
                    /*
                    theDataset = [
                        {label: "Voltage 1", data: Buff_Unit_A1[0], fill: false, borderColor: "#00FF00"},
                        {label: "Voltage 2", data: Buff_Unit_A1[1], fill: false, borderColor: "#FF0000"},
                        {label: "Voltage 3", data: Buff_Unit_A1[2], fill: false, borderColor: "#0000FF"},
                        {label: "Voltage 4", data: Buff_Unit_A1[3], fill: false, borderColor: "#FFFF00"}
                    ];
                    */
                    theDataset = [
                        {label: "Voltage 1", data: localDataset[0].voltage1, fill: false, borderColor: "#00FF00"},
                        {label: "Voltage 2", data: localDataset[0].voltage2, fill: false, borderColor: "#FF0000"},
                        {label: "Voltage 3", data: localDataset[0].voltage3, fill: false, borderColor: "#0000FF"},
                        {label: "Voltage 4", data: localDataset[0].voltage4, fill: false, borderColor: "#FFFF00"}
                    ];
                    
                    theTimestamp = localDataset[0].timestamp;
                    //theTimestamp = timestampBuff_Unit_A1[0];
                    break;
                case '2':
                    theDataset = [
                        {
                            label: "Voltage 1",
                            data: [10, 12, 11,10,10],
                            fill: false,
                            borderColor: "#00FF00"
                        },
                        {
                            label: "Voltage 2",
                            data: [11, 11, 9,10,8],
                            fill: false,
                            borderColor: "#FF0000"
                        },
                        {
                            label: "Voltage 3",
                            data: [11, 10, 11,8,12],
                            fill: false,
                            borderColor: "#0000FF"
                        }
                    ];
                    theTimestamp = ['11.00','11.01','11.02','11.03','11.04'];
                    break;
                case '3':
                    theDataset = [
                        {
                            label: "Voltage 1",
                            data: [10, 10, 10],
                            fill: false,
                            borderColor: "#00FF00"
                        },
                        {
                            label: "Voltage 2",
                            data: [11, 11, 11],
                            fill: false,
                            borderColor: "#FF0000"
                        },
                        {
                            label: "Voltage 3",
                            data: [12, 12, 12],
                            fill: false,
                            borderColor: "#0000FF"
                        },
                        {
                            label: "Voltage 4",
                            data: [9, 11, 11],
                            fill: false,
                            borderColor: "#FFFF00"
                        }
                    ];
                    theTimestamp = ['11.00','11.01','11.02'];
                    break;
                default:
                    theDataset = [
                        {
                            label: "Voltage 1",
                            data: [10, 12, 11],
                            fill: false,
                            borderColor: "#00FF00"
                        },
                        {
                            label: "Voltage 2",
                            data: [11, 11, 9],
                            fill: false,
                            borderColor: "#FF0000"
                        },
                        {
                            label: "Voltage 3",
                            data: [11, 10, 11],
                            fill: false,
                            borderColor: "#0000FF"
                        },
                        {
                            label: "Voltage 4",
                            data: [9, 11, 11],
                            fill: false,
                            borderColor: "#FFFF00"
                        }
                    ];
                    theTimestamp = ['11.00','11.01','11.02'];
                    break;
            }
            

            theChart = new Chart(myChartRef, {
                type: "line",
                data: {
                    //Bring in data
                    labels: theTimestamp,
                    datasets: theDataset
                },
                options: {
                    //Customize chart options
                    // 2 item ini untuk membuat grafik bagus di mobile
                    responsive: true,
                    maintainAspectRatio: false,
                    // atur angka sumbu di sini
                    scales: {
                        yAxes: [{
                            ticks: {
                                //nilai minimal sumbu y
                                suggestedMin: 0,
                                //nilai maksimal sumbu y
                                suggestedMax: 15
                            }
                        }]
                    }
                }
            });

        //aslinya setinterval disini
            thelabel1Ref.current.innerHTML = "<b>Voltage 1 : </b>" + String(localDataset[0].voltage1[localDataset[0].voltage1.length-1]);
            thelabel2Ref.current.innerHTML = "<b>Voltage 2 : </b>" + String(localDataset[0].voltage2[localDataset[0].voltage2.length-1]);
            thelabel3Ref.current.innerHTML = "<b>Voltage 3 : </b>" + String(localDataset[0].voltage3[localDataset[0].voltage3.length-1]);
            thelabel4Ref.current.innerHTML = "<b>Voltage 4 : </b>" + String(localDataset[0].voltage4[localDataset[0].voltage4.length-1]);
            
            theChart.data.labels = theTimestamp;
            console.log(theChart.data);
            theChart.data.datasets = theDataset;
            
            theChart.update();
            console.log('Chart Updated!');
          },1000);
    }

    render() {
        return (
            <div>
                <div>
                    <p className="centeredText">
                        <span id="Label1" ref={this.label1Ref}></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span id="Label2" ref={this.label2Ref}></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span id="Label3" ref={this.label3Ref}></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span id="Label4" ref={this.label4Ref}></span> &nbsp; &nbsp; &nbsp; &nbsp;
                    </p>
                </div>
                <div className={classes.graphContainer}>
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </div>
            </div>
        );
    }
}

export default ChartComp;