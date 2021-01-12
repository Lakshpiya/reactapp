import React,{Component} from 'react'
import '../Button/Button.css'

class BT extends Component{

    render(){

        const { 
            variant,
            content,
            clickHandle,
            typ,
            isDisable
          } = this.props;

        return(
                <div>
                      <button className={variant} 
                              onClick={clickHandle}
                              type={typ}
                              disabled={isDisable}
                      >

                                 {content}

                     </button>
                </div>
        )
    }


}

export default BT;