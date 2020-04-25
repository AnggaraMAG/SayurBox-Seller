import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Avatar from "../../assets/thumbnail/avatar.png";
import styles from "../../styles/home";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icons from "react-native-vector-icons/Ionicons";
import { Container, Content, Thumbnail } from "native-base";

export class Landing extends Component {
  render() {
    return (
      <Container style={styles.body}>
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
                <Text
                  style={{ fontSize: 20 }}
                  onPress={() => this.props.navigation.navigate("Profile")}
                >
                  Kevin
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 20 }}>Rp.-</Text>
            </View>
          </View>

          {/* CARD HOME */}
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.card}>
                <Icon.Button
                  onPress={() => this.props.navigation.navigate("Bottom")}
                  name="shopping-basket"
                  color="black"
                  backgroundColor="#f8f8f8"
                  size={50}
                />
              </View>
              <View style={styles.card}>
                <Icon.Button
                  onPress={() => this.props.navigation.navigate("List")}
                  name="list"
                  color="black"
                  backgroundColor="#f8f8f8"
                  size={50}
                />
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.card}>
                <Icons.Button
                  onPress={() => this.props.navigation.navigate("Add Product")}
                  name="md-add"
                  color="black"
                  backgroundColor="#f8f8f8"
                  size={50}
                />
              </View>
              <View style={styles.card}>
                <Icon.Button
                  onPress={() => this.props.navigation.navigate("History")}
                  name="history"
                  color="black"
                  backgroundColor="#f8f8f8"
                  size={50}
                />
              </View>
            </View>
            <View style={styles.header1}>
              <View style={styles.card1}>
                <Icon.Button
                  onPress={() => this.props.navigation.navigate("Inbox")}
                  name="inbox"
                  color="black"
                  backgroundColor="#f8f8f8"
                  size={50}
                />
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Landing;
