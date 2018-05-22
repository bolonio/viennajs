import 'isomorphic-fetch'
import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'

import Link from 'react-router/lib/Link'

const App = ({children}) => (
  <div className='App'>
    <Helmet>
      <title>willhaben ViennaJS</title>
    </Helmet>
    {children}
  </div>
)

App.propTypes = {
  children: PropTypes.element
}

export default App
