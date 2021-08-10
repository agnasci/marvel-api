import React from 'react'

import { store, persistor } from './store'

import { Provider } from 'react-redux'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import GlobalStyle from './styles/global'

import { PersistGate } from 'redux-persist/integration/react'

// Pages

import Home from './pages/Home'
import InfoCharacter from './pages/InfoCharacter'

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/info/:id" exact component={InfoCharacter} />
            </Switch>
          </PersistGate>
        </Provider>
        <GlobalStyle />
      </Router>
    </>
  )
}

export default App
