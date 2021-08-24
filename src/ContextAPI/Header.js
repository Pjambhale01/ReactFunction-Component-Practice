import React from 'react'
import { Link } from 'react-router-dom'
class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div style={{margin: '10px'}}>
                <Link style={{margin: '10px'}} to = '/'>Home</Link>
                <Link style={{margin: '10px'}}to = '/User'>User</Link>
                <Link to = '/Comment'>Comment</Link>               
            </div>
        )
    }
}
export default Header