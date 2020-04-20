import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/home";
import { Container, Content, Thumbnail, Card, CardItem } from "native-base";
export class Shop extends Component {
  render() {
    return (
      <Container style={styles.body}>
        <Content padder>
          <View style={{ marginLeft: 5, marginTop: 10 }}>
            <Text style={{ fontSize: 20 }}>Halaman Add Product</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Shop;
