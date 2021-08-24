import React from 'react'
import { useState, useEffect } from 'react'

const Edite = (props) => {
    console.log(props,'1234556')
    const {userId } = props.match.params;
    const [tempUser, setTempUser] = useState({})
    const { setUser } = props
    useEffect(() => {
        const findUser = props.edituser.find(item => item.id == userId)
        setTempUser({ ...findUser })
    }, [])
    var updateInfo = () => {
        let index = -1
        props.edituser.find((item, ind) => {
            if (item.id == userId) {
                index = ind
                return true
            }
        })
        setUser([...props.edituser.slice(0, index), {...props.edituser[index], name: tempUser.name, email: tempUser.email, website: tempUser.website }, ...props.edituser.slice(index + 1)])
        props.history.push('/User')
    }
    return (
        <div>
            {Object.keys(tempUser).length > 0 && <div>
                <div> <lable>Update Name</lable><input type='text' value={tempUser.name} onChange={(e) => setTempUser({ ...tempUser, name: e.target.value })}></input></div>
                <div> <lable>Update Email</lable><input type='text' value={tempUser.email} onChange={(e) => setTempUser({ ...tempUser, email: e.target.value })}></input></div>
                <div> <lable>Update Website</lable><input type='text' value={tempUser.website} onChange={(e) => setTempUser({ ...tempUser, website: e.target.value })}></input></div>
                <button onClick={() => updateInfo(tempUser.name, tempUser.email, tempUser.website)}>Update</button>
            </div>}
        </div>
    )
}
export default Edite