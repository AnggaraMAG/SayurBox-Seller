import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/list';
import sayur from '../../assets/images/jpg1.jpg';

export class Product extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 5, marginTop: 18}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Detail')}>
          <View style={styles.listItem}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Image source={sayur} style={styles.imgItem} />
                <Text style={styles.promo}>promo</Text>
              </View>
              <View style={{flex: 2}}>
                <Text style={styles.listTitle}>Tomat Italia</Text>
                <Text style={styles.description}>Jln. Elang IV</Text>
                <Text style={styles.description}>Total Harga : Rp90.000</Text>
              </View>
            </View>
            <View style={styles.hr} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Product;
