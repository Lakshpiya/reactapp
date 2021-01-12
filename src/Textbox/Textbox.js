import React,{Component} from 'react'
import '../Textbox/Textbox'

import LB from '../Label/Label'



class TB extends Component{

        render(){
            const { 
                variant,
                value,
                changeHandle,
                typ,
                isreadOnly,
                placeHoldr,
                maxlngth,
                option,
                lblcls,
                lblfor,
                id,
                name
              } = this.props;

            return(

                    <div className="dhight">
                            <div>
                            <LB variant={lblcls} lblfr={lblfor}  txt={option}>
                                
                                </LB>
                            </div>
                            
<div style={{marginLeft:"10px;"}}>
<input 
                              id={id}
                              name={name} 
                              className={variant}
                              onChange={changeHandle}
                              type={typ}
                              read={isreadOnly}
                              value={value}
                              placeholder={placeHoldr}
                              maxLength={maxlngth}>
                            </input>
</div>
                           
                            
                   </div>
            )
        }

}

export default TB;