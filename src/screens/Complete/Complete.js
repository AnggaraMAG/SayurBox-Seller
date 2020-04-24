import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "native-base";

export class Complete extends Component {
  render() {
    return (
      <View>
        <View>
          <Text> Pembelian Berhasil </Text>
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
              <Text style={{ color: "white" }}>Kembali ke menu awal</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default Complete;
