import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Button } from "native-base";
import Tracking from "../../assets/images/tracking.png";
import MapView, { Marker } from "react-native-maps";

export class Map extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          {/* MAPS */}
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -6.3013535,
              longitude: 106.7329682,
              latitudeDelta: 0.09,
              longitudeDelta: 0.0921
            }}
          >
            <Marker
              coordinate={{ latitude: -6.3013535, longitude: 106.7329682 }}
              title="My Location"
            />
          </MapView>
        </View>
        {/* TOMBOL */}
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
      </>
    );
  }
}

export default Map;

const styles = StyleSheet.create({
  container: {
    height: 400,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  map: {
    height: 400,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
