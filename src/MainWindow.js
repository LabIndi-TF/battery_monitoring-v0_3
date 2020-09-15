import React, { Component } from 'react';
import Selector from './components/Selector'
import WebSocketFetcher from './components/WebSocketFetcher'

//import RandomGen, {Buff_Unit_A1,timestampBuff_Unit_A1} from './components/RandomGen'

/*
setInterval(function(){
    RandomGen(Buff_Unit_A1,timestampBuff_Unit_A1);
    //console.log(Buff_Unit_A1[0].length);
    //console.log('Chart Updated!');
},1000);
*/

class MainWindow extends Component {   
    constructor(){
        super();
        this._WebSocketFetcherRef = React.createRef();
    } 
    render(){
        return(
            <div>
            {/*<h1 className="centeredH1">Monitoring Baterai Lab Indi</h1>*/}
            
            <Selector />    
            <WebSocketFetcher />
            </div>

        );
    }
}

export default MainWindow;