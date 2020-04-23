import React, { Component } from "react";
import { View, Image } from "react-native";
import styles from "../../styles/add";
import { Container, Form, Item, Input, Label, Button, Text } from "native-base";
export class Add extends Component {
  render() {
    const petani =
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg";
    return (
      <Container style={styles.container}>
        <View style={styles.header}>
          <View style={styles.card}>
            <Image style={styles.logo} source={{ uri: petani }} />
          </View>
          <Form>
            <Item floatingLabel>
              <Label>Nama</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Keterangan</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Harga</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Qty</Label>
              <Input />
            </Item>
          </Form>
        </View>
        <View>
          <Button
            block
            success
            onPress={() => this.props.navigation.navigate("Landing")}
          >
            <Text>Tambah</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default Add;
