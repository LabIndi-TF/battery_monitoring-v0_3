/*
var net = require('net');
var client = new net.Socket();

function TcpClient(){
    client.connect(1337, '127.0.0.1', function() {
        console.log('TCP Connected Successfully');
    });
    
    client.on('data', function(data) {
        console.log(data);
    });
}
export default TcpClient;
*/

/*
var net = require('react-native-tcp-socket');
var client = net.createConnection({
    host:'127.0.0.1',
    port:1337,
});
//const client = new net.createConnection(1337);

function TcpClient(){
    //client.connect(1337, '127.0.0.1', function() {
        console.log('TCP Connected Successfully');
    //});

    client.on('data', function(data) {
        console.log(data);
    });
}
export default TcpClient;
*/
import TcpSocket from 'react-native-tcp-socket';