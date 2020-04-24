import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Button } from "native-base";
import Tracking from "../../assets/images/tracking.png";

export class Map extends Component {
  render() {
    return (
      <View>
        <View>
          <Image source={Tracking} style={{ width: "100%", height: 400 }} />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <View>
            <Button
              full
              style={{
                backgroundColor: "#438D46",
                marginTop: 10,
                padding: 10
              }}
            >
              <Text style={{ color: "white" }}>Hub Pembeli</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => this.props.navigation.navigate("Landing")}
              full
              style={{
                backgroundColor: "#438D46",
                marginTop: 10,
                padding: 10
              }}
            >
              <Text style={{ color: "white" }}>Selesai</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default Map;
