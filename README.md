# battery-monitoring-v0_3
Program Battery Monitoring (Node.js - Express - React). <br />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup Software
1. Clone (atau download zip)
2. Pergi ke direktori root (yang ada README.md nya), ketik ```npm install```
3. Pergi ke direktori backend dengan ```cd backend```, lalu ```node node_server.js```
4. Kembali ke root dengan ```cd ../```, lalu ```npm start```
5. Cek di browser, http://localhost:3000 untuk UI React, http://localhost:5000/buffer untuk buffer data nya.<br />
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

## Menu yang Tersedia
1. Home <br /> Sebagai halaman Welcome umum.
2. Battery Monitoring <br /> Sebagai calon tempat menampilkan grafik per data
3. Battery Monitoring (Existing) <br /> Sistem Existing dari konsep awal (v0-1)
4. Read CSV <br /> Untuk membaca file CSV lokal. Harus menampung Header, dan saat ini baru dicoba untuk Timestamp dan 4 buah Voltage
5. Eng. Unit Setup <br /> Sebagai calon fitur untuk mengatur Scaling tampilan grafik
6. Logout <br /> Jelas untuk logout

## Changelog
Lihat CHANGELOG.md.

## Useful Sources: 
Silakan cek file DAFPUS.md untuk mengetahui sumber di balik trik-trik pemrograman yang telah dipelajari.
