import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { Container, Input } from "native-base";
import { styles } from "../../styles/list";

import sayur from "../../assets/images/kol.jpg";

import discount from "../../assets/icon/discount.png";
export class DetailProduct extends Component {
  render() {
    let bullets = [];
    for (let i = 1; i <= 6; i++) {
      bullets.push(
        <Text
          key={i}
          style={{
            ...styles.bullet,
            opacity: 1 === i ? 0.5 : 0.1
          }}
        >
          &bull;
        </Text>
      );
    }
    return (
      <Container>
        <View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ width: `${100 * 2}%` }}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled
          >
            <Image source={sayur} style={styles.carosel} />
            <Image source={sayur} style={styles.carosel} />

            {bullets}
          </ScrollView>

          <Text style={styles.ket}>Imperfect</Text>
        </View>
        <View style={{ padding: 10 }}>
          <View />
          <View>
            <Text style={styles.h2}>Gokana Ramen & tepan</Text>
            <Text style={styles.description}>7 - 8 buah/500 gram</Text>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 5 }}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.description}>Rp. 7000 </Text>
              </View>
              <View style={{ flex: 4 }}>
                <Text style={styles.save}>save 50%</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.harga}>Rp. 3000 </Text>
              <Text style={styles.description}>/500 gram</Text>
            </View>
            <View style={styles.hr} />
            <View>
              <Text style={styles.h3}>Informasi Product</Text>
              <View style={styles.hr} />
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default DetailProduct;
