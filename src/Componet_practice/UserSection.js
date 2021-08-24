import React from 'react'


const UserSection = (props) => {
     
    var handleclick=(id)=>{
        props.history.push(`/Edituser/${id}`)
    }
   
    return (<div>
        <h3>Usertsection</h3>
        <ul>
            {props.userInfo.map((i)=>
            <div style={{ float: 'left',width:'250px',height:'100px',paddingLeft:'20px',backgroundColor:'teal',color:'white', margin: '25px',border:'2px solid black' }}>
            <li>{i.name}</li>
            <li>{i.email}</li>
            <li>{i.website}</li>
            <button onClick={()=> handleclick(i.id)}>Edit</button>
            </div>
            )}
        </ul>
    </div>)
}
export default UserSection