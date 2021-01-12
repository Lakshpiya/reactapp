import React,{Component} from 'react'
import '../Header/Header.css'

class CHeader extends Component{

    render(){
        return(
                 <div className="header">                    
                         <h1>
                            Welcome to React POC World With Docker
                         </h1>                    
                 </div>
        )
    }
}

export default CHeader;