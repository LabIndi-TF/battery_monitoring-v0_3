import { Stream } from 'serialport';

export default function SerialCommSetup(){

    //const SerialPort = require('@serialport/stream');
    const SerialPort = require('serialport');
    const Readline = require("@serialport/parser-readline")

    const port = new SerialPort('COM3', {
        baudRate: 9600,
        binding: Stream
    });

    //SerialPort.Binding
 
    // list serial ports:
    /*
    SerialPort.list(function (err, ports) {
        ports.forEach(function(port) {
        console.log(port.comName);
        });
    });
    */
    //SerialPort.list();
    /*
    const port = new SerialPort('COM3', {
        baudRate: 9600,
    });
    
    const parser = new Readline();
    port.pipe(parser);

    parser.on("data",(line) => console.log(line));
    */
}