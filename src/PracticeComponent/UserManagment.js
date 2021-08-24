import React from 'react'
import { useContext } from 'react'
import { DataContext } from './ContextApi/Datacontext'
const UserManagment = (props) => {
    const data = useContext(DataContext)
    var handleClick = (id) => {
        props.history.push(`/Edit/${id}`)
        console.log(props, 'edituser')
    }
    return (
        <div>
            <h3 style={{ width: '50px', margin: 'auto' }}>UserManagment</h3>
            <div style={{ width: '80%', margin: 'auto' }}>
                <ul >
                    {data.users.map((i, index) =>
                        <div key={index} style={{ float: 'left', width: '250px', height: '100px', paddingLeft: '20px', backgroundColor: 'teal', color: 'white', margin: '25px', border: '2px solid black' }}>
                            <li>Name:{i.name}</li>
                            <li>Email:{i.email}</li>
                            <li>Website:{i.website}</li>
                            <button onClick={() => handleClick(i.id)}>Edit</button>
                        </div>)}
                </ul>
            </div>
        </div>
    )
}
export default UserManagment