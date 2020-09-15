# battery-monitoring-v0_2
Program Battery Monitoring (Node.js - Express - React). <br />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup Software
1. Clone (atau download zip)
2. Pergi ke direktori root (yang ada README.md nya), ketik ```npm install```
3. Install express dan serialport dengan ```npm install express serialport```
4. Pergi ke direktori backend dengan ```cd backend```, lalu ```node node_server.js```
5. Kembali ke root dengan ```cd ../```, lalu ```npm start```
6. Cek di browser, http://localhost:3000 untuk UI React, http://localhost:5000/buffer untuk buffer data nya.<br />
    Sementara ini, program dibuat untuk single user. Login dengan username "root" dan password "password".

## Setup Hardware
1. Pastikan Arduino dengan Battery Monitoring pada kondisi default ada di COM4, dengan baudRate 9600. Jika bukan di COM4, ganti bagian ini di file node_server.js:
    ```
    //deklarasi objek serial
    var portName = "COM4";
    var myPort = new serialport(portName,{
        baudRate:9600
    });
    ```
2. Sejauh ini cuma itu sih

## Changelog
Lihat CHANGELOG.md.

## Useful Sources: 
Silakan cek file DAFPUS.md untuk mengetahui sumber di balik trik-trik pemrograman yang telah dipelajari.