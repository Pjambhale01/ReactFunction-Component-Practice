import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { DataContext } from './ContextApi/Datacontext'
const EditComment = (props) => {
    const data = useContext(DataContext)
    const { userId } = props.match.params;
    const { setComment } = data
    const [tempComment, setTempComment] = useState({})
    useEffect(() => {
        var findComment = data.comment.find(item => item.id == userId)
        setTempComment({ ...findComment })
    }, [])
    var updateComment = () => {
        let index = -1
        data.comment.find((item, ind) => {
            if (item.id == userId) {
                index = ind
                return true
            }
        })
        setComment([...data.comment.slice(0, index), { ...data.comment[index], name: tempComment.name, email: tempComment.email, body: tempComment.body }, ...data.comment.slice(index + 1)])
        props.history.push('/Comment')
    }
    return (
        <div >
            <div style={{ width: '80%', margin: 'auto', backgroundColor: 'gray' }}>
                <div style={{ margin: '5px' }}> <label>Update Name:</label><input type='text' value={tempComment.name} onChange={(e) => setTempComment({ ...tempComment, name: e.target.value })}></input></div><br></br>
                <div style={{ margin: '5px' }}> <label>Update email:</label><input type='text' value={tempComment.email} onChange={(e) => setTempComment({ ...tempComment, email: e.target.value })}></input></div><br></br>
                <div style={{ margin: '5px' }}> <label>Update body:</label><input type='text' value={tempComment.body} onChange={(e) => setTempComment({ ...tempComment, body: e.target.value })}></input></div><br></br>
                <div style={{ margin: '5px' }}> <button onClick={() => updateComment(tempComment.name, tempComment.email, tempComment.body)}>Update</button></div>
            </div>
        </div>
    )
}
export default EditComment