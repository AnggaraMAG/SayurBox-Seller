import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Avatar from "../assets/thumbnail/avatar.png";
import styles from "../styles/home";
import {
  Container,
  Content,
  Thumbnail,
  Card,
  CardItem,
  Icon
} from "native-base";
export class Shop extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <View
            style={{
              flexDirection: "row",
              marginTop: 6,
              justifyContent: "space-between"
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Thumbnail source={Avatar} />
              <View style={{ marginLeft: 5, marginTop: 10 }}>
                <Text style={{ fontSize: 20 }}>Kevin Salto</Text>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 20 }}>Rp.999999</Text>
            </View>
          </View>

          {/* CARD HOME */}
          <View style={styles.header}>
            <Card style={styles.card}>
              <CardItem>
                <Text>//Your text here</Text>
              </CardItem>
            </Card>
            <Card style={styles.card}>
              <CardItem>
                <Text>//Your text here</Text>
              </CardItem>
            </Card>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Shop;
