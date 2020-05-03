import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {styles} from '../../styles/list';
import sayur from '../../assets/images/jpg1.jpg';
import DATA from '../../json/list.json';

export class List extends Component {
  render() {
    const {width, height} = Dimensions.get('window');
    return (
      <SafeAreaView>
        <ScrollView>
          {/* // Header */}
          <View style={{backgroundColor: 'white', height: '100%'}}>
            <View>
              {/* CONTENT 1 */}
              <View
                style={{
                  marginRight: 10,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginTop: 10,
                }}>
                <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>
                  Jamur
                </Text>
              </View>
              <FlatList
                data={DATA}
                renderItem={({item}) => (
                  <View
                    style={{
                      backgroundColor: 'white',
                      borderColor: '#669F43',
                      borderRadius: 5,
                      borderStyle: 'solid',
                      borderWidth: 1,
                      marginLeft: 10,
                      marginRight: 10,
                      marginBottom: 5,
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Edit Produk')
                      }>
                      <View>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{flex: 1}}>
                            <Image source={sayur} style={styles.imgItem} />
                          </View>
                          <View style={{flex: 2}}>
                            <Text style={styles.text1}>{item.name}</Text>
                            <Text style={styles.text2}>Rp.{item.price}</Text>
                            <Text style={styles.text3}>QTY:{item.qty}</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item.id}
              />
              {/* CONTENT 2 */}
              <View style={{marginRight: 10, marginLeft: 10, marginBottom: 10}}>
                <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>
                  Sayuran Segar
                </Text>
              </View>
              <FlatList
                data={DATA}
                renderItem={({item}) => (
                  <View
                    style={{
                      backgroundColor: 'white',
                      borderColor: '#669F43',
                      borderRadius: 5,
                      borderStyle: 'solid',
                      borderWidth: 1,
                      marginLeft: 10,
                      marginRight: 10,
                      marginBottom: 5,
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Edit Produk')
                      }>
                      <View>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{flex: 1}}>
                            <Image source={sayur} style={styles.imgItem} />
                          </View>
                          <View style={{flex: 2}}>
                            <Text style={styles.text1}>{item.name}</Text>
                            <Text style={styles.text2}>Rp.{item.price}</Text>
                            <Text style={styles.text3}>QTY:{item.qty}</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
            {/* CONTENT 2 */}
            <View style={{marginRight: 10, marginLeft: 10, marginBottom: 10}}>
              <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>
                Sayuran Segar
              </Text>
            </View>
            <FlatList
              data={DATA}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: 'white',
                    borderColor: '#669F43',
                    borderRadius: 5,
                    borderStyle: 'solid',
                    borderWidth: 1,
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 5,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Edit Produk')
                    }>
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                          <Image source={sayur} style={styles.imgItem} />
                        </View>
                        <View style={{flex: 2}}>
                          <Text style={styles.text1}>{item.name}</Text>
                          <Text style={styles.text2}>Rp.{item.price}</Text>
                          <Text style={styles.text3}>QTY:{item.qty}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default List;
