import React, {Component} from 'react';
import Product from '../../../components/card/Product';

export class Process extends Component {
  render() {
    return <Product navigation={this.props.navigation} />;
  }
}

export default Process;
