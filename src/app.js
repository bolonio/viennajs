import React from 'react'
import ReactDOM from 'react-dom'

import routes from './routes'
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'

import contextFactory from './contextFactory'
import withContext from '@s-ui/hoc/lib/withContext'

import {register} from '@s-ui/bundler/registerServiceWorker'

import './styles/index.scss'

contextFactory().then(context => {
  const App = withContext(context)(Router)
  ReactDOM.render(
    <App routes={routes} history={browserHistory} />,
    document.getElementById('app')
  )
})

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})()
