import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CommentDetails from './CommentDetails'
import DataProvider from './CreateAPI/ContextAPI'
import Header from './Header'
import Home from './Home'
import UserDetails from './UserDetails'
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
               <DataProvider>
                <BrowserRouter>
                   <Header/>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/User' component={UserDetails} />
                        <Route path='/Comment' component={CommentDetails} />
                    </Switch>
                </BrowserRouter>
                </DataProvider>
            </div>
        )
    }
}
export default Dashboard