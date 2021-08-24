import React from 'react'
import { useContext } from 'react'
import { DataContext } from './ContextApi/Datacontext'
const CommentSection = (props) => {
    const Comment = useContext(DataContext)
    const { comment } = Comment
    var handleClick = (id) => {
        props.history.push(`/editComment/${id}`)
    }
    return (
        <div>
            <h3 style={{ width: '50px', margin: 'auto' }}>CommentSection</h3>
            <ul>
                {comment.map((i) =>
                    <div style={{ margin: 'auto', width: '80%', border: '2px solid black', paddingLeft: '20px', marginBottom: '10px', backgroundColor: 'teal' }}>
                        <li>{i.name}</li>
                        <li>{i.email}</li>
                        <li>{i.body}</li>
                        <button onClick={() => handleClick(i.id)}>Update</button>
                    </div>)}
            </ul>
        </div>
    )
}
export default CommentSection