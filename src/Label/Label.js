import React,{Component} from 'react'
import '../Label/lbl.css'

class LB extends Component{
    render(){
        const { 
            variant,
            txt,
            labelfor
          } = this.props;
         return(
                        <label className={variant} 
                                htmlFor={labelfor}>
                                {txt}
                        </label>
         )
         
    }

}


export default LB;