import React from 'react'
import Home from './Home'
import User from './User'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Comment from './Comment'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Edite from './Edite'
const Dashboard = () => {

    const [users , setUser] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {setUser(res.data)})
    },[])
    return (
        <div>
            <div>
            <BrowserRouter>
              <Header/>
                <Switch>
                    <Route path='/Edituser/:userId' render={(routeProps)=><Edite   setUser={setUser}  edituser={users}  {...routeProps} />}/>
                    <Route path='/User' render={(routeProps)=><User usersInfo={users}{...routeProps}/>}/> 
                    <Route path='/Comment' component={Comment} />
                    <Route path='/' component={Home} />
                </Switch>
            </BrowserRouter>
            </div>
           <Footer/>
        </div>
        
    )
}
export default Dashboard