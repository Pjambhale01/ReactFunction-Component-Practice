import React from 'react'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { DataContext } from './ContextApi/Datacontext'
const Edite = (props) => {
    const data = useContext(DataContext)
    const { userId } = props.match.params;
    const [tempUser, setTempUser] = useState({})
    const { setUsers } = data
    useEffect(() => {
        var finduser = data.users.find(item => item.id == userId)
        setTempUser({ ...finduser })
    }, [])
    console.log(tempUser, 'inside edituser')
    var updateInfo = () => {
        let index = -1
        data.users.find((item, ind) => {
            if (item.id == userId) {
                index = ind
                return true
            }
        })
        setUsers([...data.users.slice(0, index), { ...data.users[index], name: tempUser.name, email: tempUser.email, website: tempUser.website }, ...data.users.slice(index + 1)])
        props.history.push('/User')
    }
    return (
        <div>
            {Object.keys(tempUser).length > 0 && <div style={{ width: '80%', margin: 'auto', backgroundColor: 'gray' }}>
                <div style={{ margin: '5px' }}> <lable>Update Name:</lable><input type='text' value={tempUser.name} onChange={(e) => setTempUser({ ...tempUser, name: e.target.value })}></input></div>
                <div style={{ margin: '5px' }}> <lable>Update Email:</lable><input type='text' value={tempUser.email} onChange={(e) => setTempUser({ ...tempUser, email: e.target.value })}></input></div>
                <div style={{ margin: '5px' }}> <lable>Update Website:</lable><input type='text' value={tempUser.website} onChange={(e) => setTempUser({ ...tempUser, website: e.target.value })}></input></div>
                <button style={{ marginLeft: '115px' }} onClick={() => updateInfo(tempUser.name, tempUser.email, tempUser.website)}>Update</button>
            </div>}
        </div>
    )
}
export default Edite