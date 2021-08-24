import React from 'react'
import {useState, useEffect,createContext} from 'react'
import axios from 'axios'
export const DataContext = createContext()  // External Location import createContext
const DataProvider =({children})=>{
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setUsers(res.data)     
        })
    },[])  
    const [comment, setComment] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {
            setComment(res.data)         
        })
    },[])
    return (
        <DataContext.Provider value={{users,setUsers,comment, setComment}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider