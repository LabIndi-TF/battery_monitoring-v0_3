/************************** Import library/fungsi ****************************/
const serialportgsm = require('serialport-gsm');

/************************ Deklarasi objek/variabel ***************************/
let modem = serialportgsm.Modem()
let options = {
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: 'none',
    rtscts: false,
    xon: false,
    xoff: false,
    xany: false,
    autoDeleteOnReceive: true,
    enableConcatenation: true,
    incomingCallIndication: true,
    incomingSMSIndication: true,
    pin: '',
    customInitCommand: '',
    logger: console
}
 
/********************************** Main *************************************/
modem.open('COM4', options, {});

modem.on('open', data => {	
    modem.initializeModem((data) => {
        console.log('--- PROGRAMCONSOLE --- : GSM Module initialization success!');

        modem.sendSMS('+6281220587597',"Sebuah sms test",true,(data) => {
            console.log(data);
        });
    });
});

modem.on('onSendingMessage', result => {
    console.log(result);
});
