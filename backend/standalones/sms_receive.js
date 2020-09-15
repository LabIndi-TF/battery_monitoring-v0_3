var serialport = require('serialport');

var port = new serialport("COM4", {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.on("open",onOpen);
port.on("error",onError);
port.on("data",onDataReceived);

function onOpen(error){
    if(!error){
        console.log("--- GSM MODULE --- : Port open success!");
        //read(port);
    }
};

function onDataReceived(data){
    //var recvTimeout = setTimeout(function(){
        console.log("Received data : "+ data);
    //},1000);
};

function onError(error){
    console.log(error);
};

function onClose(error){
    console.log("Closing connection");
    console.log(error);
};

function send(serial,toAddress,message){
    serial.write("AT+CMGF=1");
    serial.write('\r');
    serial.write("AT+CMGS=\""+ toAddress +"\"");
    //serial.write("AT+CMGS=\"+6281220587597\"");
    serial.write('\r');
    setTimeout(function(){
        serial.write(message);
        serial.write('\x1A');
    },10000);
};

function read(serial){
    serial.write("AT+CMGF=1");
    serial.write('\r');
    serial.write("AT+CNMI=1,2,0,0,0");
    serial.write('\r');
};

var sendTimer = setTimeout(function(){
    send(port,"+6281220587597","anyaj");
},5000);