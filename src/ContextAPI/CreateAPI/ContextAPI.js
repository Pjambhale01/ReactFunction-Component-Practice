import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'

export const ContextAPI = createContext() //external location

const DataProvider = ({ children }) => {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setUser(res.data)
        })
    },[])
    return (
        <div>
            <ContextAPI.Provider value={{user ,setUser}} >
                {children}
            </ContextAPI.Provider>

        </div>
    )
}

export default DataProvider