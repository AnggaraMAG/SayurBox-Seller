import React, { Component } from "react";
import { Text, View } from "react-native";
import { Container, Content, Thumbnail } from "native-base";

export class List extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <View style={{ marginLeft: 5, marginTop: 10 }}>
            <Text style={{ fontSize: 20 }}>Halaman List Product</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default List;
