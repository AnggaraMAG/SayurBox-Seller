import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Thumbnail,
  CardItem,
  Card,
  Title,
  Subtitle,
  Left,
  Right,
  Button
} from "native-base";
import Img from "../../assets/images/kol.jpg";
import { ScrollView } from "react-native-gesture-handler";

export class Editpesanan extends Component {
  render() {
    return (
      <ScrollView>
        <View />
        <Card>
          <CardItem>
            <Left>
              <Thumbnail square source={Img} style={{ borderRadius: 6 }} />
              <View style={{ marginLeft: 7 }}>
                <Title style={{ color: "black" }}>Sayur Kol</Title>
                <Subtitle style={{ color: "black" }}>Harga</Subtitle>
                <Subtitle style={{ color: "black" }}>Total</Subtitle>
              </View>
            </Left>
            <Right>
              <View style={{ flexDirection: "row" }}>
                <Button
                  style={{
                    backgroundColor: "#438D46",
                    marginTop: 10,
                    padding: 10
                  }}
                >
                  <Text style={{ color: "white" }}>-</Text>
                </Button>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: 15
                  }}
                >
                  1
                </Text>
                <Button
                  full
                  style={{
                    backgroundColor: "#438D46",
                    marginTop: 10,
                    padding: 10
                  }}
                >
                  <Text style={{ color: "white" }}>+</Text>
                </Button>
              </View>
            </Right>
          </CardItem>
        </Card>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 16,
            paddingBottom: 16
          }}
        >
          <View style={{ marginRight: "5%" }}>
            <Button
              full
              style={{ backgroundColor: "#438D46", marginTop: 10, padding: 10 }}
              // onPress={() => this.props.navigation.navigate("None")}
            >
              <Text style={{ color: "white" }}> Cancel </Text>
            </Button>
          </View>
          <View>
            <Button
              full
              style={{ backgroundColor: "#438D46", marginTop: 10, padding: 10 }}
              // onPress={() => this.props.navigation.navigate("None")}
            >
              <Text style={{ color: "white" }}> Konfirm </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Editpesanan;

export const styles = StyleSheet.create({
  card: {}
});
