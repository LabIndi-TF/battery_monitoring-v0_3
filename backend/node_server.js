/************************** Import library/fungsi ****************************/
//library serialport
var serialport = require('serialport');

//library untuk server tempat buffer serta koneksi mysql
const express = require('express');

//library untuk (format) timestamp
var moment  = require('moment');

/************************ Deklarasi objek/variabel ***************************/
//Buffer data battery monitoring dari serial
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
var currentBuff_Unit_A1 = [[0],[0],[0],[0]];
const dataLimit = 20;
var iter = 0;

//deklarasi objek serial
var portName = "COM4";
var myPort = new serialport(portName,{
    baudRate:9600
});

//deklarasi objek server
const app = express();
const port = 5000;

/************************ Deklarasi fungsi/event ***************************/
function StoreToBuffer(currentBuff,Buff,Timestamp){
    for(var i=0;i<4;i++){
        if((Buff[i].length)>dataLimit){
            Buff[i].shift();
            Buff[i][dataLimit] = currentBuff[i][0];
            Timestamp[i].shift();
            Timestamp[i][dataLimit] = String(moment().format('hh:mm:ss'));
        }
        else{
            Buff[i][Buff[i].length] = currentBuff[i][0];
            Timestamp[i][Timestamp[i].length] = String(moment().format('hh:mm:ss'));
        }
    }
    return [Buff,Timestamp];
}

//event listener untuk mengoper data dari serial ke server
function expressGETBuffer(){
    app.get('/api/buffer',(req,res) =>{
        var devices = [
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
        res.json(devices);
    });
    //console.log("2a. GET to Server");
}

function expressGETcsvBuffer(){
    app.get('/api/csvBuffer',(req,res) =>{
        var devices = [
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
        res.json(devices);
    });
    //console.log("2a. GET to Server");
}

//event Listener bila ada serial masuk dari Arduini
myPort.on("data", (line) => {
    //console.log("1a. Serial data Acquired");
    iter +=1;
    //ubah tipe data Buffer Javascript jadi Array
    bufferArray = [...line];

    //satukan data buffer menjadi integer
    Arus_int = (bufferArray[1]<<8) | bufferArray[0];
    V1_int = (bufferArray[3]<<8) | bufferArray[2];
    V2_int = (bufferArray[5]<<8) | bufferArray[4];

    //konversi integer ke float
    Arus = Arus_int/100.0;
    V1 = V1_int/100.0;
    if(V1>15) V1=0;
    V2 = V2_int/100.0;
    if(V2>15) V2=0;
    //console.log("1b. Serial data Converted");

    //masukkan ke buffer agar dapat diakses chart dan server
    currentBuff_Unit_A1 = [[V1],[V2],[Arus],[0]];
    StoreToBuffer(currentBuff_Unit_A1,Buff_Unit_A1,timestampBuff_Unit_A1);
    //console.log("1c. Serial data Stored to Buffer");
    
    //debug
    /*
    //console.log(bufferArray);
    console.log(`iter:${iter}`);
    console.log(`Arus : ${Arus}`);
    console.log('V1 : '+ String(V1));
    console.log(`V2 : ${V2}`);
    */
});

myPort.on("close",() => {
    console.log("RECON coz close");
    myPort.resume();
});

myPort.on("error",() => {
    console.log("RECON coz error");
    myPort.resume();
});
/****************************** Main Loop ***********************************/
//untuk polling data tiap x detik
function pollData(){
    console.log(`\n-------------------- NEW LOOP #${iter} --------------------\n`);
    pollCharacter = [0x11];
    //console.log("1. Polled Serial Port");
    myPort.write(pollCharacter);
    //console.log("2. GET Procedure");
    expressGETBuffer();
    expressGETcsvBuffer();
}
setInterval(pollData,1000);

/******************** Finalisasi (nyalakan server) *************************/
app.listen(port, () => console.log(`Server started on port ${port}`));