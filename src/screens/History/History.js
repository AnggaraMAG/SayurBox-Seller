import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import Avatar from "../../assets/icon/vegetable.png";
import styles from "../../styles/history";
import { Content, Thumbnail } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export class Chat extends Component {
  render() {
    return (
      <Content padder style={{ backgroundColor: "white" }}>
        <ScrollView>
          {/* HEADER */}
          <View style={styles.header}>
            <View
              style={{
                justifyContent: "center",
                alignContent: "center",
                marginRight: 5
              }}
            >
              <Button title="Vegetables" />
            </View>
            {/* <View
              style={{
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <Button title="Delivery" />
            </View> */}
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
            <View>
              <Text
                style={{ fontWeight: "bold" }}
                onPress={() => this.props.navigation.navigate("Detail History")}
              >
                Tomat - Tangerang Selatan
              </Text>
              <Text style={{ color: "#A0A0A0" }}>
                2Kg items - Jl.Elang IV...
              </Text>
            </View>
            <View>
              <Text>3:00 pm</Text>
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
            <View>
              <Text style={{ fontWeight: "bold" }}>
                Tomat - Tangerang Selatan
              </Text>
              <Text style={{ color: "#A0A0A0" }}>
                2Kg items - Jl.Elang IV...
              </Text>
            </View>
            <View>
              <Text>3:00 pm</Text>
            </View>
          </View>
        </ScrollView>
      </Content>
    );
  }
}

export default Chat;
