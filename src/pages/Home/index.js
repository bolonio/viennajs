import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../component/wh-header/wh-header'
import Footer from '../../component/wh-footer/wh-footer'

/*
import Button from '@schibstedspain/sui-atom-button'
import Text from "../../component/whml-text/whml-text";
import Input from "../../component/whml-input/whml-input";
import Page from "../../component/whml-page/whml-page";
import Address from "../../component/whml-address/whml-address";
import Group from "../../component/whml-group/whml-group";
*/

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      content: []
    }
  }

  static getInitialProps = async ({context, routeInfo}) => {
    const data = await context.domain
      .get('getSellerProfile')
      .execute()
    console.debug('data', data)
    return { data }
  }

  render () {
    const articles = this.props.data.searchResult.advertSummaryList.advertSummary
    return (
      <React.Fragment>
        <div className='container-responsive container-fluid main-container ng-scope side-menu-invisible'>
          <Header />
          <ul>
            {articles.map(({id, description}) => {
              return (
                <li key={id}>
                  <a href=''>{description}</a>
                </li>
              )
            })}
          </ul>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

Home.contextTypes = {
  domain: PropTypes.object,
  router: PropTypes.object.isRequired
}
Home.defaultProps = {data: []}
Home.propTypes = {data: PropTypes.object}

export default Home
