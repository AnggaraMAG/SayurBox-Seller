import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Order from "../../screens/Pesanan/Tab/Neworder";
import Proses from "../../screens/Pesanan/Tab/Process";
import Send from "../../screens/Pesanan/Tab/Send";
import Grafik from "../../assets/images/grafik.webp";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Top = createMaterialTopTabNavigator();

export class Pesanan extends Component {
  render() {
    return (
      <>
        <View style={{ marginHorizontal: 10 }}>
          <View>
            <Image source={Grafik} style={{ height: 200, width: 300 }} />
          </View>
        </View>
        <Top.Navigator>
          <Top.Screen name="Pesanan (20)" component={Order} />
          <Top.Screen name="Proses (5)" component={Proses} />
          <Top.Screen name="Dikirim (5)" component={Send} />
        </Top.Navigator>
      </>
    );
  }
}

export default Pesanan;
