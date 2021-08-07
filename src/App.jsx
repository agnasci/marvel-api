import React from 'react'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

// Pages

import Home from './pages/Home'
import InfoCharacter from './pages/InfoCharacter'
import EditInfoCharacter from './pages/EditInfoCharacter'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" exact component={InfoCharacter} />
          <Route path="/details/:id/edit" exact component={EditInfoCharacter} />
        </Switch>
      </Router>
    </>
  )
}

export default App
