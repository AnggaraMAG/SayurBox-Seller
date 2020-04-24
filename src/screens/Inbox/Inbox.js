import React, { Component } from "react";
import { Text, View } from "react-native";
import Avatar from "../../assets/icon/message.png";
import styles from "../../styles/inbox";
import {
  Content,
  Thumbnail,
  CardItem,
  Card,
  Title,
  Subtitle,
  Left,
  Right,
  Button
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export class Inbox extends Component {
  render() {
    return (
      <Content style={{ backgroundColor: "white" }}>
        <ScrollView>
          {/* CONTENT */}
          <View style={styles.container}>
            <View
              style={{
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <Thumbnail small source={Avatar} />
            </View>

            <View style={{ paddingLeft: "3%" }}>
              <Text
                onPress={() => this.props.navigation.navigate("Detail Inbox")}
              >
                Sambut Ramadhan Lebih Hangat
              </Text>
              <Text>Bareng Menu COMBO #RAMERAME</Text>
            </View>
          </View>
          {/* CONTENT */}
          <View style={styles.container}>
            <View
              style={{
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <Thumbnail small source={Avatar} />
            </View>

            <View style={{ paddingLeft: "3%" }}>
              <Text
                onPress={() => this.props.navigation.navigate("Detail Inbox")}
              >
                Sambut Ramadhan Lebih Hangat
              </Text>
              <Text>Bareng Menu COMBO #RAMERAME</Text>
            </View>
          </View>
        </ScrollView>
      </Content>
    );
  }
}

export default Inbox;
