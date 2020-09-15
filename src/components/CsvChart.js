import React, { Component } from 'react'
import Chart from "chart.js";
//import { timestampBuff_Unit_A1,Buff_Unit_A1 } from './RandomGen'
import { localCSVDataset } from '../pages/ReadCSV';

import Button from 'react-bootstrap/Button';

import classes from "./ChartComp.module.css";

Chart.defaults.global.elements.line.tension = 0;
Chart.defaults.global.animation.duration = 0;

let theChart;
let theDataset,theTimestamp;

class CsvChart extends Component {
    constructor(props){
        super(props)
        this.state = {
            deviceId: 1
        }
        this.refSelector = React.createRef();
        //this.changeDevice = this.changeDevice.bind(this);
    }
    static getDerivedStateFromProps(props,state){
        if (props.selected !== state.selected) {
            return {
              selected: props.selected,
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
        this.buildChart();
    }

    datasetToChart(dataset){
        var converted = dataset;
        return converted;
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");

        theDataset = localCSVDataset;
        
        /*
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
        */

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
        /*
        document.getElementById("Label1").innerHTML = "<b>Voltage 1 : </b>" + String(localCSVDataset[0].voltage1[localCSVDataset[0].voltage1.length-1]);
        document.getElementById("Label2").innerHTML = "<b>Voltage 2 : </b>" + String(localCSVDataset[0].voltage2[localCSVDataset[0].voltage2.length-1]);
        document.getElementById("Label3").innerHTML = "<b>Voltage 3 : </b>" + String(localCSVDataset[0].voltage3[localCSVDataset[0].voltage3.length-1]);
        document.getElementById("Label4").innerHTML = "<b>Voltage 4 : </b>" + String(localCSVDataset[0].voltage4[localCSVDataset[0].voltage4.length-1]);
        */
        theChart.update();
        console.log('Chart Updated!');
    }

    render() {
        return (
            <div>
                <div>
                    <p className="centeredText">
                        <span id="Label1"></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span id="Label2"></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span id="Label3"></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span id="Label4"></span> &nbsp; &nbsp; &nbsp; &nbsp;
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

export default CsvChart;