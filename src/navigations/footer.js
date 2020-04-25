import React, { Component } from "react";
import { Container, Footer, FooterTab, Button, Icon, Text } from "native-base";
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Footer style={{ bottom: 0 }}>
        <FooterTab>
          <Button vertical>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate("Add Product")}
          >
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button
            vertical
            active
            onPress={() => this.props.navigation.navigate("Pesanan")}
          >
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate("List")}
          >
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
