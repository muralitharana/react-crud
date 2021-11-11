import React from 'react'
import {BrowserRouter as Router ,  Route, Switch} from "react-router-dom"
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Android from './Components/technologies/Android'
import Backend from './Components/technologies/Backend'
import Cloud from './Components/technologies/Cloud'
import Desktop from './Components/technologies/Desktop'
import Devops from './Components/technologies/Devops'
import Frontend from './Components/technologies/Frontend'
import Fullstack from './Components/technologies/Fullstack'
import IOS from './Components/technologies/IOS'
import Network from './Components/technologies/Network'
import Todo from './Components/Todo'
const RouterComp = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/react-crud/" component={Login}/>
                    <Route exact path="/Register" component={Register}/>
                    <Route exact path="/Home" component={Home}/>
                    <Route exact path="/Todo" component={Todo}/> 

                    <Route exact path="/Frontend" component={Frontend}/>
                    <Route exact path="/Backend" component={Backend}/>
                    <Route exact path="/Fullstack" component={Fullstack}/>
                    <Route exact path="/Android" component={Android}/>
                    <Route exact path="/IOS" component={IOS}/>
                    <Route exact path="/Desktop" component={Desktop}/>
                    <Route exact path="/Devops" component={Devops}/>
                    <Route exact path="/Cloud" component={Cloud}/>
                    <Route exact path="/Network" component={Network}/>
                </Switch>
            </Router>
        </div>
    )
}

export default RouterComp
