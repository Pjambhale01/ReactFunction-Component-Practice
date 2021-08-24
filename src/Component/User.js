import React from 'react'
import axios from 'axios'
import Footer from './Footer'
const User = (props) =>{
    console.log(props,'parmeshwr')
    const handleClick=(id)=>{
    props.history.push(`/Edituser/${id}`)
    }
    return(    
        <div>
            <h1>This is  user</h1>
            {props.usersInfo.map((i,index)=> <ul key={index} style={{float:'left',border:'1px solid black',margin:'10px',backgroundColor:'teal'}}>
                <div><li>Name:{i.name}</li></div>
                <div><li>Email:{i.email}</li></div>
                <div><li>Website:{i.website}</li> </div>
                 <div><button onClick={()=>handleClick(i.id)}>Edit</button></div>
                </ul> 
            )}          
        </div>
    )
}
export default User