import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {styles} from '../../styles/produk';
import sayur from '../../assets/images/jpg1.jpg';
import DATA from '../../json/pesanan.json';

export class Product extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 5, marginTop: 18}}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Detail')}>
              <View style={styles.listItem}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <Image source={sayur} style={styles.imgItem} />
                    <Text style={styles.promo}>promo</Text>
                  </View>
                  <View style={{flex: 2}}>
                    <Text style={styles.listTitle}>{item.name}</Text>
                    <Text style={styles.description}>{item.resi}</Text>
                    <Text style={styles.description}>{item.address}</Text>
                    <Text style={styles.italic}>Rp.{item.price}</Text>
                    <Text style={styles.italicRed}>Pengiriman {item.date}</Text>
                  </View>
                </View>
                <View style={styles.hr} />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default Product;
