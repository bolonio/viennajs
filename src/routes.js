import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
// import IndexRoute from 'react-router/lib/IndexRoute'

import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'

const loadHome = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)

const routes = (
  <Router>
    <Route component={require('./component/App').default}>
      <Route path='/' getComponent={loadHome} />
    </Route>
  </Router>
)

export default routes
