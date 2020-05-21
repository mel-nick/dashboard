import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Users from './components/Users'
import Sessions from './components/Sessions'
import Analytics from './components/Analytics'
import Chats from './components/Chats'
import Messages from './components/Messages'
import HelpCenter from './components/HelpCenter'
import Settings from './components/Settings'
import {Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
      <Container fluid >
        <Row className="row">
            <Navigation />
              <Switch>
                <Route exact path ="/users" component={Users} />
                <Route exact path ="/sessions" component={Sessions} />
                <Route exact path ="/analytics" component={Analytics} />
                <Route exact path ="/messages" component={Messages} />
                <Route exact path ="/chats" component={Chats} />
                <Route exact path ="/help" component={HelpCenter} />
                <Route exact path ="/settings" component={Settings} />
              </Switch>
        </Row>
      </Container>
      </Fragment>        
    </Router>
  )
}

export default App
