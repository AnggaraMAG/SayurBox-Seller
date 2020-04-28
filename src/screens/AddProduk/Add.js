import React, { Component } from "react";
import { View, Image, TextInput, Button, Text } from "react-native";
import styles from "../../styles/add";
import petani from "../../assets/images/add.png";
import ImagePicker from "react-native-image-picker";
import { Container } from "native-base";
export class Add extends Component {
  state = {
    photo: null
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log("response", response);
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };
  render() {
    const { photo } = this.state;
    return (
      <>
        <Container style={styles.container}>
          <View>
            <View style={styles.header1}>
              <View style={styles.card}>
                {photo && (
                  <Image source={{ uri: photo.uri }} style={styles.logo} />
                )}
              </View>
              <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
            </View>
            <View style={{ justifyContent: "center" }}>
              <TextInput
                style={{
                  height: 40,
                  marginTop: 5,
                  borderColor: "gray",
                  borderWidth: 1
                }}
                // onChangeText={text => onChangeText(text)}
                // value=""
                placeholder="Name"
              />
              <TextInput
                style={{
                  height: 40,
                  marginTop: 5,
                  borderColor: "gray",
                  borderWidth: 1
                }}
                placeholder="Keterangan"
              />
              <TextInput
                style={{
                  height: 40,
                  marginTop: 5,
                  borderColor: "gray",
                  borderWidth: 1
                }}
                placeholder="Harga"
              />

              {/* <View style={{ flexDirection: "row" }}> */}
              <TextInput
                style={{
                  height: 40,
                  marginTop: 5,
                  borderColor: "gray",
                  borderWidth: 1
                }}
                placeholder="Qty"
              />
              {/* <Button
                style={{
                  backgroundColor: "#438D46",
                  height: 40,
                  marginTop: 5,
                  marginLeft: "3%"
                }}
              >
                <Text style={{ color: "white" }}>-</Text>
              </Button>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontWeight: "bold",
                  fontSize: 20,
                  marginTop: 10
                }}
              >
                1
              </Text>
              <Button
                style={{
                  backgroundColor: "#438D46",
                  height: 40,
                  marginTop: 5,
                  marginLeft: "3%"
                }}
              >
                <Text style={{ color: "white" }}>+</Text>
              </Button>
            </View> */}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 16,
                  paddingBottom: 16
                }}
              >
                {/* <View style={{ marginRight: "5%" }}>
                  <Button
                    full
                    style={{
                      backgroundColor: "#438D46",
                      marginTop: 10,
                      padding: 10
                    }}
                    // onPress={() => this.props.navigation.navigate("None")}
                  >
                    <Text style={{ color: "white" }}> Cancel </Text>
                  </Button>
                </View>
                <View>
                  <Button
                    full
                    style={{
                      backgroundColor: "#438D46",
                      marginTop: 10,
                      padding: 10
                    }}
                    // onPress={() => this.props.navigation.navigate("None")}
                  >
                    <Text style={{ color: "white" }}> Konfirm </Text>
                  </Button>
                </View> */}
              </View>
            </View>
          </View>
        </Container>
      </>
    );
  }
}

export default Add;
