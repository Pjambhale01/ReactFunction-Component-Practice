import React from 'react'
import {ContextAPI }from './CreateAPI/ContextAPI'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

class UserDetails extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       const {user} = this.context;
       console.log(user,'parmeshwar')
        return(
            <div>
                <h3> userdetails Class Component </h3>
            </div>
        )
    }
}



export default UserDetails