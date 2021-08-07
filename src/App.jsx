import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './src/pages/Home'
import AppBar from './src/components/AppBar'

function App() {
  return (
    <>
      <AppBar />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App
