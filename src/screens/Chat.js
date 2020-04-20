import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Avatar from '../assets/thumbnail/avatar.png';
import {Container, Content, Thumbnail} from 'native-base';

export class Chat extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Thumbnail source={Avatar} />
            </View>
            <View style={{flex: 3, marginTop: 10}}>
              <Text>Kevin Salto</Text>
              <Text style={{color: '#A0A0A0'}}>
                saya pesan 100kg ada dapat...
              </Text>
            </View>
            <View style={{flex: 1, marginTop: 10}}>
              <Text>3:00 pm</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#f2f2f4',
              height: 2,
              marginTop: 5,
            }}
          />
        </Content>
      </Container>
    );
  }
}

export default Chat;
