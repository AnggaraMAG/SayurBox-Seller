import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { ListItem } from "native-base";
import sayur from "../../assets/images/kol.jpg";

export class Product extends Component {
  render() {
    return (
      <View style={{ marginHorizontal: 5, marginTop: 18 }}>
        <TouchableOpacity>
          <ListItem onPress={() => this.props.navigation.navigate("Detail")}>
            <View style={{ marginRight: 10 }}>
              <Image
                source={sayur}
                style={{ width: 50, height: 50, borderRadius: 5 }}
              />
            </View>
            <View>
              <Text>Nama : Marimar</Text>
              <Text>Alamat</Text>
              <Text>Total Harga : RP.999999</Text>
            </View>
          </ListItem>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Product;
