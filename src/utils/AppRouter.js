import React from 'react'
import { Router, Route } from 'react-router-dom'

import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route> */}
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default AppRouter
