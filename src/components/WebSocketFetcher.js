import React, { Component } from 'react';

var linkBuffer = '/api/buffer'

var Buff_Unit_A1 = [
    [0],
    [0],
    [0],
    [0]
];
var timestampBuff_Unit_A1 = [
    [0],
    [0],
    [0],
    [0]
];

export var localDataset = [
    {
        id:1, name: 'Unit_A1', 
        voltage1: Buff_Unit_A1[0],
        voltage2: Buff_Unit_A1[1],
        voltage3: Buff_Unit_A1[2],
        voltage4: Buff_Unit_A1[3],
        timestamp: timestampBuff_Unit_A1[0]
    },
    {
        id:2, name: 'Unit_A2',
        voltage1: [10, 12, 11],
        voltage2: [11, 11, 9],
        voltage3: [11, 10, 11],
        voltage4: [9, 11, 11],
        timestamp: ['11.00','11.01','11.02'] 
    },
    {
        id:3, name: 'Unit_B1', 
        voltage1: [10, 10, 10],
        voltage2: [11, 11, 11],
        voltage3: [12, 12, 12],
        voltage4: [9, 11, 11],
        timestamp: ['11.00','11.01','11.02']
    },
];

class WebSocketFetcher extends Component{
    constructor(){
        super();
        this.state = {
            devices: []
        }
    }

    componentDidMount(){
        fetch(linkBuffer)
        .then(res => res.json())
        .then(devices => this.setState({devices}, () => {
            console.log('Initial data fetch success!',devices);
        }));
        document.getElementById("WebSocketFetcherStatus").innerHTML = "WebSocketFetcherStatus = init fetch success!";
        this.fetchData();
    }

    componentWillUnmount(){
        clearInterval(this.WebSocketFetcherTimer);
    }

    fetchData(){
        this.WebSocketFetcherTimer = setInterval(function(){
            fetch(linkBuffer)
            .then(res => res.json())
            .then(function(result){
                localDataset = result;
                //console.log('Refresh data fetch success!',localDataset);
            });
            //console.log('Refresh data fetch success!',localDataset);
            console.log('Refresh data fetch success!');
            document.getElementById("WebSocketFetcherStatus").innerHTML = "WebSocketFetcherStatus = refresh fetch success!";
        },1000);
    }

    render(){
        return(
            <div>
                <p hidden id="WebSocketFetcherStatus">WebSocketFetcherStatus = idle</p>
            </div>
        );
    }
}

export default WebSocketFetcher;