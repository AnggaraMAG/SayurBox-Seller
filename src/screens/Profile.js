import React, { Component } from "react";
import { Text, View } from "react-native";
import Avatar from "../assets/thumbnail/avatar.png";
import {
  Container,
  Content,
  List,
  ListItem,
  Icon,
  Right,
  Thumbnail
} from "native-base";
import Coin from "react-native-vector-icons/MaterialCommunityIcons";

export class Profile extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              paddingHorizontal: 12,
              marginBottom: 10
            }}
          >
            <View style={{ flex: 1 }}>
              <Thumbnail source={Avatar} />
            </View>
            <View style={{ flex: 3, marginTop: 10 }}>
              <Text style={{ fontSize: 20 }}>Kevin Salto</Text>
            </View>
            <View />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View>
              <View style={{ flexDirection: "row" }}>
                <Coin name="coin" size={20} />
                <Text>Coin Saya</Text>
              </View>
              <Text style={{ marginHorizontal: 20, color: "#438D46" }}>
                60 Poin
              </Text>
            </View>
            <View>
              <Text>Code referal</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#f2f2f4",
              height: 17
            }}
          />
          <List>
            <ListItem selected style={{ justifyContent: "space-between" }}>
              <Text>Alamat Saya</Text>
              <Right>
                <Icon name="arrow-forward" style={{ color: "#438D46" }} />
              </Right>
            </ListItem>
            <ListItem selected style={{ justifyContent: "space-between" }}>
              <Text>Voucher Saya</Text>
              <Right>
                <Icon name="arrow-forward" style={{ color: "#438D46" }} />
              </Right>
            </ListItem>
            <ListItem selected style={{ justifyContent: "space-between" }}>
              <Text>Keluar</Text>
              <Right>
                <Icon name="arrow-forward" style={{ color: "#438D46" }} />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Profile;
