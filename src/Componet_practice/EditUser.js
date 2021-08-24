import React, { useEffect, useState } from 'react'
//import {} from 'react-router-dom'
const EditUser =(props)=>{
   
   
    
    const {userId } = props.match.params;
    const {setUser} =props
    const [tempUser,setTempUser] =useState({})
    useEffect(()=>{
        let findUser = props.editInfo.find(item=>item.id == userId)
        setTempUser({...findUser})
    },[])
    

  var  updateInfo=()=>{
    var index = -1
    props.editInfo.find((item, ind) => {
        if (item.id == userId) {
            index = ind
            return true
        }
    })
    setUser([...props.editInfo.slice(0,index),{...props.editInfo[index],name:tempUser.name, email:tempUser.email, website:tempUser.website },...props.editInfo.slice(index + 1)])
    props.history.push('/Users')
    }
    return(
        <div>
            <h3>Edituser</h3>
           {Object.keys(tempUser).length > 0 && <div>
            <lable>Update Name:</lable><input type='text'value={tempUser.name} onChange={(e)=> setTempUser({...tempUser,name:e.target.value})} ></input>
            <lable>Update Email:</lable><input type='text'value={tempUser.email} onChange={(e)=> setTempUser({...tempUser,email:e.target.value})}></input>
            <lable>Update Website:</lable><input type='text'value={tempUser.website} onChange={(e)=> setTempUser({...tempUser,website:e.target.value})}></input>
            <button onClick={()=>updateInfo(tempUser.name,tempUser.email,tempUser.website)}>Update</button>
            </div>}
        </div>
    )
}
export default EditUser