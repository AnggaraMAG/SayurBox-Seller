import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Content,
} from 'native-base';

export class Shop extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded style={{backgroundColor: '#438D46'}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Cari produk segar disini..." />
          </Item>
        </Header>
        <Content padder>
          <View style={{flexDirection: 'row', marginTop: 6}}>
            <View>
              <Icon name="ios-search" />
            </View>
            <View>
              <Icon name="ios-search" />
            </View>
          </View>
          <View>
            <Text>hello</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Shop;
