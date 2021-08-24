import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import User from './User'

class LandingScreen extends React.Component{
    constructor(props){
        super(props)
    }
    

    // var handleClick=()=>{
    //     console.log("handle click callS")
    //  }
   
    render(){
       
        return(
            <>
             <h1>This is landing Screen</h1>
            <button >User Details</button>
            
            </>
        )
    }
}
export default LandingScreen