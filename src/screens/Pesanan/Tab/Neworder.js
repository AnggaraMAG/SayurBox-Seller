import React, { Component } from "react";
import Product from "../../../components/card/Product";
//an
export class Neworder extends Component {
  render() {
    return <Product navigation={this.props.navigation} />;
  }
}

export default Neworder;
