import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { styles } from "../../styles/detail";
import { ListItem, Button } from "native-base";
// import Modal from '../../components/modal/modal';

export class Detail extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          {/* header */}
          <View style={styles.title}>
            <Text>Kevin</Text>
            <Text>Id872371</Text>
          </View>
          <View style={styles.address}>
            <Text style={styles.addressC}>Alamat</Text>
          </View>
        </View>
        {/* list item */}

        <ScrollView>
          <View>
            <ListItem>
              <Text style={styles.titleFlex}>Kol</Text>
              <Text style={styles.titleFlex}>4Kg</Text>
              <Text>Rp.2000</Text>
            </ListItem>
            <ListItem style={styles.product}>
              <Text style={styles.titleFlex}>Kol</Text>
              <Text style={styles.titleFlex}>4Kg</Text>
              <Text>Rp.2000</Text>
            </ListItem>
            <ListItem style={styles.product}>
              <Text style={styles.titleFlex}>Kol</Text>
              <Text style={styles.titleFlex}>4Kg</Text>
              <Text>Rp.2000</Text>
            </ListItem>
            <ListItem style={styles.product}>
              <Text style={styles.titleFlex}>Kol</Text>
              <Text style={styles.titleFlex}>4Kg</Text>
              <Text>Rp.2000</Text>
            </ListItem>
          </View>
          <View>
            <ListItem style={styles.product}>
              <Text style={styles.ongkir}>Ongkir</Text>
              <Text style={styles.total}>Rp.10.000</Text>
            </ListItem>
          </View>
          <View>
            <ListItem style={styles.product}>
              <Text style={styles.ongkir}>Task 10%</Text>
              <Text style={styles.total}>Rp.100.000</Text>
            </ListItem>
          </View>
          <View>
            <ListItem style={styles.product}>
              <Text style={styles.ongkir}>TOTAL</Text>
              <Text style={styles.total}>Rp.1.000.000</Text>
            </ListItem>
          </View>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{
                marginHorizontal: 10,
                flexDirection: "row",
                marginTop: 5
              }}
            >
              <View style={{ marginRight: 5 }}>
                <Button
                  full
                  style={{
                    backgroundColor: "#438D46",
                    marginTop: 10,
                    padding: 60
                  }}
                >
                  <Text style={{ color: "white" }}>Terima</Text>
                </Button>
              </View>
              <View>
                <Button
                  full
                  style={{
                    backgroundColor: "#438D46",
                    marginTop: 10,
                    padding: 65
                  }}
                >
                  <Text style={{ color: "white" }}>Cancel</Text>
                </Button>
              </View>
            </View>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <View>
              <Button
                full
                style={{
                  backgroundColor: "#438D46",
                  marginTop: 10,
                  marginBottom: 10
                }}
              >
                <Text style={{ color: "white" }}>Hub Pembeli</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Detail;
