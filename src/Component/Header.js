import React from 'react'
import { Link } from 'react-router-dom'
const Header =()=>{
    return(
        <div>
           <Link style={{margin:'10px'}} to ='/'>Home</Link>
           <Link style={{margin:'10px'}} to ='/User'>User</Link>
           <Link style={{margin:'10px'}} to ='/Comment'>Comment</Link>
        </div>
    )
}
export default Header