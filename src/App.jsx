import React from 'react'

import store from './store'

import { Provider } from 'react-redux'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import GlobalStyle from './styles/global'

// Pages

import Home from './pages/Home'
import InfoCharacter from './pages/InfoCharacter'
import EditInfoCharacter from './pages/EditInfoCharacter'

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/details/:id" exact component={InfoCharacter} /> */}
            <Route path="/info" exact component={InfoCharacter} />
            {/* <Route path="/details/:id/edit" exact component={EditInfoCharacter} /> */}
            <Route path="/edit" exact component={EditInfoCharacter} />
          </Switch>
        </Provider>
        <GlobalStyle />
      </Router>
    </>
  )
}

export default App
