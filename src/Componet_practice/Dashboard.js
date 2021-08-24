import React from 'react'
import { BrowserRouter,Route,Switch}from 'react-router-dom'
import CommentSection from './CommentSection'
import Home from './Home'
import UserSection from './UserSection'
import Header from './Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import EditUser from './EditUser'
const Dashboard = ()=>{


    const [state, setState] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setState(res.data)
          
        },[])
    })
    return( 
        <div>
            <BrowserRouter>
             <Header/>
            <Switch>
             <Route path='/Edituser/:userId' render={(routeProps)=><EditUser setUser={setState} editInfo={state}{...routeProps}/>}/>
             <Route path='/Users' render={(routeProps)=><UserSection userInfo={state}{...routeProps}/>}/>
             <Route path='/Comments' component={CommentSection}/>
             <Route path='/'  component={Home}/>
             </Switch>
            </BrowserRouter>
        
        </div>
    )
}
export default Dashboard