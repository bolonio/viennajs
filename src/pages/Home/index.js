import React from 'react'
import PropTypes from 'prop-types'
import Button from '@schibstedspain/sui-atom-button'

import Text from "../../component/whml-text/whml-text";
import Input from "../../component/whml-input/whml-input";
import Page from "../../component/whml-page/whml-page";
import Address from "../../component/whml-address/whml-address";
import Group from "../../component/whml-group/whml-group";

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      content: []
    };
  }

  generateLayout = layoutStructure => {
    let componentList = [];
    layoutStructure.forEach(function (item) {
      console.debug("item", item);
      if (item.type === "INPUT") {
        item.children.forEach(function (child) {
          if(child.properties.type === "placeholder") {
            item.properties.placeholder = child.properties.value;
          }
          if(child.properties.type === "unit") {
            item.properties.unit = child.properties.value;
          }
          if(child.properties.type === "label") {
            item.properties.label = child.properties.value;
          }
          if(child.properties.type === "regular") {
            item.properties.regular = child.properties.value;
          }
        });
        componentList.push(React.createElement(Input, item.properties, item.children));
      }
      if (item.type === "ADDRESS") {
        componentList.push(React.createElement(Address, item.properties, item.children));
      }
      if (item.type === "GROUP") {
        componentList.push(React.createElement(Group, item.properties, item.children));
      }
      if (item.type === "PAGE") {
        componentList.push(React.createElement(Page, item.properties, item.children));
      }
      if (item.type === "TEXT") {
        componentList.push(React.createElement(Text, item.properties, item.children));
      }
    });
    return componentList;
  }

  static getInitialProps = async ({context, routeInfo}) => {
    const data = await context.domain
      .get('getMarkup')
      .execute()
    return { data }
  }

  render() {
    const layout = this.generateLayout(this.props.data)
    return (
      <div className="container immo-aza">
        <div className="showcase">
          { layout.map((component, i) => <div key={i}>{ component }</div>) }
        </div>
      </div>
    );
  }
}

Home.contextTypes = {
  domain: PropTypes.object,
  router: PropTypes.object.isRequired
}
Home.defaultProps = {data: []}
Home.propTypes = {data: PropTypes.array}

export default Home
