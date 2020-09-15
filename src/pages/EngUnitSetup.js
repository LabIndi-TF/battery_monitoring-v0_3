/************************** Import library/fungsi ****************************/
//library React dan modul-modul React yang diperlukan
import React,{Component} from 'react'

//modul-modul Bootstrap
import Button from 'react-bootstrap/Button'

/************************ Deklarasi objek/variabel ***************************/

/************************ Deklarasi kelas/komponen ***************************/

class EngUnitSetup extends Component{
    constructor(props){
        super(props);
        this.state = {
            config:{
                status:'Config Unchanged'
            }
        }
        this.handleApply = this.handleApply.bind(this);
        this.configInputRef = React.createRef();
        this.configSpanRef = React.createRef();
    }

    handleApply(){
        this.setState({
            config:{
                status:this.configInputRef.current.value
            }
        },() =>{
            this.configSpanRef.current.innerHTML = this.state.config.status;
        });
    }


    render(){
        return(
            <>
                <input id="configInput" ref={this.configInputRef}/>
                <Button onClick={this.handleApply}>Apply</Button>
                <span>Current State : <span id="configSpan" ref={this.configSpanRef}/>{this.state.config.status}</span>
            </>
        );
    }
}

export default EngUnitSetup