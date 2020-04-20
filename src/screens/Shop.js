import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Avatar from '../assets/thumbnail/avatar.png';
import {Container, Content, Thumbnail, Card, Icon} from 'native-base';
export class Shop extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 6,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Thumbnail source={Avatar} />
              <View style={{marginLeft: 5, marginTop: 10}}>
                <Text style={{fontSize: 20}}>Kevin Salto</Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 20}}>Rp.999999</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginTop: 18,
              flexWrap: 'wrap',
              marginHorizontal: 0,
            }}>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#E8E8E8',
                  marginRight: 5,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '25%',
                }}>
                <Icon
                  onPress={() => this.props.navigation.navigate('Pesanan')}
                  type="Feather"
                  name="box"
                />
                <Text>Pesanan</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#E8E8E8',
                  borderRadius: 10,
                  marginRight: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '25%',
                }}>
                <Icon type="Feather" name="box" />
                <Text>Pesanan</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#E8E8E8',
                  borderRadius: 10,
                  marginRight: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '25%',
                }}>
                <Icon type="Feather" name="box" />
                <Text>Pesanan</Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Shop;
