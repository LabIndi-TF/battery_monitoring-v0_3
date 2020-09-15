/************************** Import library/fungsi ****************************/
//library React dan modul-modul React yang diperlukan
import React from 'react'
import Chart from "chart.js";

import { CSVReader } from 'react-papaparse'

//modul-modul Bootstrap
import Button from 'react-bootstrap/Button'

import classes from "../components/ChartComp.module.css";
/************************ Deklarasi objek/variabel ***************************/
const buttonRef = React.createRef()

Chart.defaults.global.elements.line.tension = 0;
Chart.defaults.global.animation.duration = 0;
var localCSVDataset={};
let theChart;
let theDataset,theTimestamp;
var col0, col1, col2, col3, col4;

/************************ Deklarasi kelas/komponen ***************************/
class ReadCSV extends React.Component {
  // File Dialog
	handleOpenDialog = (e) => {
		// Note that the ref is set async, so it might be null at some point
		if (buttonRef.current) {
		  buttonRef.current.open(e)
		}
	  }
	
	  handleOnFileLoad = (data) => {
		console.log('---------------------------')
		console.log(data)
		console.log('---------------------------')
    localCSVDataset = data;
    this.buildChart();
	  }
	
	  handleOnError = (err, file, inputElem, reason) => {
		console.log(err)
	  }
	
	  handleOnRemoveFile = (data) => {
		console.log('---------------------------')
		console.log(data)
		console.log('---------------------------')
    localCSVDataset = data;
    this.buildChart();
	  }
	
	  handleRemoveFile = (e) => {
		// Note that the ref is set async, so it might be null at some point
		if (buttonRef.current) {
		  buttonRef.current.removeFile(e)
		}
    }
    
    // Chart
    chartRef = React.createRef();
    /*
    componentDidMount() {
        this.buildChart();
    }
    */
    componentDidUpdate() {
        this.buildChart();
    }

    csvToDataset(csv){
      var converted = {};
      var convertedDataset = [];
      var convertedTimestamp = [];
      var numRow = csv.length;
      col0 = [0]; col1 = [0]; col2=[0]; col3=[0]; col4 = [0];

      for(var row=0;row<numRow;row++){
        col0[row] = parseFloat(csv[row].data.Voltage1);
        col1[row] = parseFloat(csv[row].data.Voltage2);
        col2[row] = parseFloat(csv[row].data.Voltage3);
        col3[row] = parseFloat(csv[row].data.Voltage4);
        col4[row] = csv[row].data.Timestamp;
      }
      
      console.log(col1);
      convertedDataset = [
        {
            label: "Voltage 1",
            data: col0,
            fill: false,
            borderColor: "#00FF00"
        },
        {
            label: "Voltage 2",
            data: col1,
            fill: false,
            borderColor: "#FF0000"
        },
        {
            label: "Voltage 3",
            data: col2,
            fill: false,
            borderColor: "#0000FF"
        },
        {
            label: "Voltage 4",
            data: col3,
            fill: false,
            borderColor: "#FFFF00"
        }
     ];        
     convertedTimestamp = col4;
     converted={
       dataset: convertedDataset,
       timestamp: convertedTimestamp
     }

      return converted;
    }

    buildChart = () => {
      const myChartRef = this.chartRef.current.getContext("2d");

      if(localCSVDataset!=null){
      theDataset = this.csvToDataset(localCSVDataset).dataset;
      theTimestamp = this.csvToDataset(localCSVDataset).timestamp;
      }
      else{
        theDataset=[];
        theTimestamp=[];
      }
      //theDataset = localCSVDataset;
      
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
		  <> {/* ini adalah cara cepat menulis <Fragment> */}
		    <h1 className="centeredH1">Read CSV File</h1>
        <div className="text-center">
          <CSVReader
            config={{
              header:true,
              transformHeader:function(h) {
                return h.trim();
              }
            }}
            ref={buttonRef}
            onFileLoad={this.handleOnFileLoad}
            onError={this.handleOnError}
            noClick
            noDrag
            onRemoveFile={this.handleOnRemoveFile}
          >
            {({ file }) => (
            <aside
              style={{
              display: 'flex',
              flexDirection: 'row',
              margin: 0,
              }}
            >
              <Button
              onClick={this.handleOpenDialog}
              >
              Browse file
              </Button>
              <div
              style={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#ccc',
                height: 45,
                lineHeight: 2.5,
                marginTop: 5,
                marginBottom: 5,
                paddingLeft: 13,
                paddingTop: 3,
                width: '60%'
              }}
              >
              {file && file.name}
              </div>
              <Button
              onClick={this.handleRemoveFile}
              >
              Remove
              </Button>
            </aside>
            )}
          </CSVReader>
        </div>
        <div className={classes.graphContainer}>
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
        </div>
		  </>
		)
	}
}
export default ReadCSV;