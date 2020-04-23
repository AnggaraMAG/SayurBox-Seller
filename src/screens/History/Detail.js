import React, { Component } from "react";
import { Text, View } from "react-native";
import Avatar from "../../assets/icon/vegetable.png";
import Spoon from "../../assets/icon/spoon.png";
import Pin from "../../assets/icon/pin.png";
import styles from "../../styles/detailHistory";
import { Thumbnail, Button } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export class DetailHistory extends Component {
  render() {
    return (
      <ScrollView>
        {/* CONTENT */}
        <View style={styles.container}>
          <View>
            <Text
              style={{ color: "#A0A0A0" }}
              onPress={() => this.props.navigation.navigate("Detail History")}
            >
              Booking ID
            </Text>
          </View>
          <View>
            <Text style={{ color: "#A0A0A0" }}>ADR:108561795-051</Text>
          </View>
        </View>
        {/* CONTENT 1 */}
        <View style={styles.header}>
          <View
            style={{
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <Thumbnail small source={Avatar} />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <Text style={{ fontWeight: "bold", paddingRight: "10%" }}>
              Tomat - Tangerang Selatan
            </Text>
            <Text style={{ color: "#A0A0A0" }}>Delivered ° GF-963</Text>
          </View>
          <View
            style={{
              paddingTop: "4%"
            }}
          >
            <Text style={{ color: "#66CAFF", fontWeight: "bold" }}>Order</Text>
          </View>
        </View>
        {/* CONTENT 2 */}
        <View style={styles.cardHeader2}>
          {/* isi 1 */}
          <View style={styles.card1}>
            <View
              style={{
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <Thumbnail style={{ width: 20, height: 20 }} source={Spoon} />
            </View>
            <View>
              <Text style={{ paddingLeft: 10 }}>
                Jl. Raya Tegal Rotan No.508, Tangerang Selatan
              </Text>
            </View>
          </View>
          <View style={styles.card1}>
            <View
              style={{
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <Thumbnail style={{ width: 20, height: 20 }} source={Pin} />
            </View>
            <View>
              <Text style={{ paddingLeft: 10 }}>
                Jl. Raya Tegal Roti No.69, Tangerang Selatan...
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 15,
              borderBottomColor: "#F8F7F7",
              borderBottomWidth: 1
            }}
          />
          {/* isi 2 */}
          <View style={styles.card2}>
            <View
              style={{
                justifyContent: "center",
                alignContent: "center"
              }}
            ></View>
            <View>
              <Text
                style={{ paddingLeft: 9, fontWeight: "bold", marginTop: 15 }}
              >
                Note to seller
              </Text>
            </View>
          </View>
          <View style={styles.card2}>
            <View>
              <Text
                style={{ color: "#A0A0A0", paddingLeft: 9, marginBottom: 15 }}
              >
                deket pos satpam ya bos..
              </Text>
            </View>
          </View>
        </View>
        {/* Content 3 */}
        <View style={styles.cardTotal}>
          <View style={styles.cardHeader3}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Order Summary</Text>
            </View>
            <View>
              <Text style={{ color: "#66CAFF", fontWeight: "bold" }}>
                Reorder
              </Text>
            </View>
          </View>
          <View style={styles.cardHeader3}>
            <View>
              <Text style={{ fontWeight: "bold" }}>1x</Text>
              <Text style={{ fontWeight: "bold" }}>2x</Text>
            </View>
            <View>
              <Text style={{ paddingRight: "40%" }}>Tomat Italy</Text>
              <Text>Tomat Spanyol</Text>
            </View>
            <View>
              <Text>60.000</Text>
              <Text>16.000</Text>
            </View>
          </View>
        </View>
        {/* CONTENT 4 */}
        <View style={styles.cardHeader2}>
          {/* isi 1 */}
          <View style={styles.card3}>
            <View>
              <Text style={{ color: "#A0A0A0" }}>Subtotal</Text>
              <Text style={{ color: "#A0A0A0" }}>Delivery fees</Text>
            </View>
            <View>
              <Text style={{ color: "#A0A0A0" }}>Rp76.000</Text>
              <Text style={{ color: "#A0A0A0", textAlign: "right" }}>
                7.600
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 15,
              borderBottomColor: "#F8F7F7",
              borderBottomWidth: 1
            }}
          />
          {/* isi 2 */}
          <View style={styles.card3}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Total</Text>
            </View>
            <View>
              <Text>Rp83.600</Text>
            </View>
          </View>
        </View>
        {/* <View style={{ bottom: 0 }}>
          <Button
            style={styles.btn}
            block
            success
            onPress={() => this.props.navigation.navigate("Landing")}
          >
            <Text style={{ color: "white" }}>SayurClone</Text>
          </Button>
        </View> */}
      </ScrollView>
    );
  }
}

export default DetailHistory;
