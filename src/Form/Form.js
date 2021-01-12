import React,{Component} from 'react'

import LB from '../Label/Label'
import TXFN from '../Textbox/Textbox'
import TXLN from '../Textbox/Textbox'
import BTN from '../Button/Button'


class CForm extends Component{
   
    constructor(){   
        super();       
        this.state={
            work:false,
            num1:0,
            result:0,num2:0
        }        
        this.Tc=this.Tc.bind(this);
        this.Tc1=this.Tc1.bind(this);
        this.kalian=this.kalian.bind(this);
    }

    Tc(e){
        this.setState({
         num1:e.target.value 
        })
    }

    Tc1(e){  
        this.setState({
        num2:e.target.value 
        })
    }
    kalian(){
        const state = this.state;
         this.setState({
          work:this.state,
          result: parseInt(state.num1,10) + parseInt(state.num2,10)
         })
      }

    render(){
        return(                 
               <div style={{marginTop:"50px"}}>                   
                    
                    <TXFN id="txtFN" name="First Name" lblfor="txtFN" option="Enter Your First Name"
                       placeHoldr="Enter Your First Name" maxlngth="10"
                       value={this.state.num1} changeHandle={this.Tc}
                    ></TXFN>
                   
                   <TXLN id="txtLN" name="Last Name" lblfor="txtLN" option="Enter Your Last Name"
                       placeHoldr="Enter Your Last Name" maxlngth="10"
                       value={this.state.num2} changeHandle={this.Tc1}
                    ></TXLN>

                    <BTN typ="Button" clickHandle={this.kalian} isDisable={false} content="SUBMIT">
                          
                    </BTN>
               </div>
        )
    }
}

export default CForm;