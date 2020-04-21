import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container, Content, Form, Item, Input, Button} from 'native-base';

export class Reset extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <View>
            <Text style={{fontSize: 13, color: '#A0A0A0', textAlign: 'center'}}>
              Masukkan Email Anda dibawah untuk mendapatkan email intruksi dan
              tautan reset Password
            </Text>
          </View>
          <Form>
            <Item regular>
              <Input placeholder="Email" Size="small" />
            </Item>
            <Button full style={{backgroundColor: '#438D46', marginTop: 10}}>
              <Text style={{color: 'white'}}> Kirim </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Reset;
