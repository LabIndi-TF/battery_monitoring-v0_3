# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.3] - 2020-09-15

### Added
- Folder ./backend/standalones/csvLogs yang memuat contoh-contoh file CSV yang bisa dibaca
- Program mandiri node_csv sebagai pembelajaran pembacaan CSV di node.js
- Halaman baru : Read CSV (sudah dengan isinya) dan Eng. Unit Setup (belum diisi)
- Melengkapi komentar-komentar pada program (masih dalam proses, belum selesai)

### Changed
- Referensi-referensi komponen DOM HTML diganti cara aksesnya menjadi ala React. <br /> 
    Contohnya ```document.getElementById``` menjadi ```this.<Sebuah nama Ref>.current```.
- Komponen Selector sekarang melewatkan prop berupa id device terpilih ke dalam ChartComp, dan interaksi update ChartComp didasarkan pada prop ini.

## [0.2] - 2020-09-09

### Added
- Halaman login, dan layout dasar dengan konsep React-Router
- User pertama "root" sebagai admin aplikasi
- Folder ./backend/standalones yang memuat snippet-snippet program yang berdiri sendiri. Berlaku juga sebagai folder sandboxing
- Folder  ./src/css yang memuat css global untuk seluruh komponen/layout
- Penggunaan (React-)Bootstrap untuk elemen-elemen UI

### Changed
- Data dummy menjadi data serial (Arduino di COM4)
- Komponen chart sekarang berhenti melakukan polling data dari server jika halaman yang memuatnya tidak aktif (di unmount)
- File aplikasi utama (App.js) sekarang tidak memuat MainWindow (komponen berisi chart), tetapi Router

## [0.1] - 2020-09-04

### Added
- Fitur pembaca data serial (generator angka random di comment)
- Sebuah server (http://localhost:5000) dummy yang hanya menampung GET data dari serial
- Folder ./backend untuk memuat aplikasi yang harus berjalan di balik layar (server)

### Changed
- Data dummy menjadi data serial (Arduino di COM4)
- Perlu 2 terminal untuk menjalankan dua file yang berbeda (node untuk server, npm start untuk client)

## [0.0] - 2020-09-02

### Added
- Upload awal

### Changed
- Perubahan basis program dari tampilan web statis (HTML-JS-PHP) ke React-app

### Removed
- Halaman login pada web statis
