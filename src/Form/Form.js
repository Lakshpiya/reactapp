import React,{Component} from 'react'

import LB from '../Label/Label'
import TXFN from '../Textbox/Textbox'
import TXLN from '../Textbox/Textbox'

class CForm extends Component{

    render(){
        return(
                 
               <div style={{marginTop:"50px"}}>                   
                    
                    <TXFN id="txtFN" name="First Name" lblfor="txtFN" option="Enter Your First Name"
                       placeHoldr="Enter Your First Name" maxlngth="10"
                    ></TXFN>
                   
                   <TXLN id="txtLN" name="Last Name" lblfor="txtLN" option="Enter Your Last Name"
                       placeHoldr="Enter Your Last Name" maxlngth="10"
                    ></TXLN>
               </div>

        )
    }
}

export default CForm;