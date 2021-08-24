import React, { } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import CommentSection from './CommentSection'
import DataProvider from './ContextApi/Datacontext'
import UserManagment from './UserManagment'
import Header from './Header'
import Edit from './Edit'
import EditComment from './EditComment'
const Dashboard = () => {
    return (
        <div>
            <DataProvider>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path='/Edit/:userId' component={(routeProps) => <Edit {...routeProps} />} />
                        <Route path='/editComment/:userId' component={(routeProps) => <EditComment {...routeProps} />} />
                        <Route path='/User' component={UserManagment} />
                        <Route path='/Comment' component={CommentSection} />
                        <Route path='/' component={Home} />
                    </Switch>
                </BrowserRouter>
            </DataProvider>
        </div>
    )
}
export default Dashboard