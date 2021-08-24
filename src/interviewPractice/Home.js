
import React from 'react'
import axios from 'axios'
import UserDetails from '../ContextAPI/UserDetails'
import User from './User'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class Home extends React.Component{
    constructor(props){
        super(props)
            this.state={
                  title:"Home Page",
                  information:''
            }
        
    }

    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            this.setState({...this.state.information=res.data})
        })

    }

    render(){
        console.log(this.state.information)
        return(
            <>
            {/* <div style={{width:'30%',margin:'auto'}}>
                <h1>{this.state.title}</h1>
            </div> */}
            <BrowserRouter>
              <Switch>
                <Route to='/user' component={User}/>
                 
              </Switch>
            </BrowserRouter>
            
            </>
        )
    }
}

export default Home