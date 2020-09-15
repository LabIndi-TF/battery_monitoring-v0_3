import moment from 'moment';

export var Buff_Unit_A1 = [[0],[0],[0],[0]];
export var timestampBuff_Unit_A1 = [[0],[0],[0],[0]];
export var currentBuff_Unit_A1 = [[0],[0],[0],[0]];
const dataLimit = 20;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export default function RandomGen(Buff,Timestamp){
    let currentBuff = [
            getRndInteger(8,12),
            getRndInteger(8,12),
            getRndInteger(8,12),
            getRndInteger(8,12),
        ];

    for(var i=0;i<4;i++){
        if((Buff[i].length)>dataLimit){
            Buff[i].shift();
            Buff[i][dataLimit] = currentBuff[i];
            Timestamp[i].shift();
            Timestamp[i][dataLimit] = String(moment().format('hh:mm:ss'));
        }
        else{
            Buff[i][Buff[i].length] = currentBuff[i];
            Timestamp[i][Timestamp[i].length] = String(moment().format('hh:mm:ss'));
        }
    }

    return [Buff,Timestamp];
}
