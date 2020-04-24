import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Order from "../../screens/Pesanan/Tab/Neworder";
import Proses from "../../screens/Pesanan/Tab/Process";
import Send from "../../screens/Pesanan/Tab/Send";
// import Grafik from "../../assets/images/grafik.webp";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Top = createMaterialTopTabNavigator();

export class Pesanan extends Component {
  render() {
    return (
      <>
        <View style={{ marginHorizontal: 10 }} />
        <Top.Navigator>
          <Top.Screen name="Pesanan" component={Order} />
          <Top.Screen name="Proses" component={Proses} />
          <Top.Screen name="Dikirim" component={Send} />
        </Top.Navigator>
      </>
    );
  }
}

export default Pesanan;
