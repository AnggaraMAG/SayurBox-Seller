import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Container, Content, Card, Button} from 'native-base';
import {styles} from '../../styles/list';
import {ScrollView} from 'react-native-gesture-handler';
import sayur from '../../assets/images/jpg1.jpg';
import star from '../../assets/icon/star.png';
import gps from '../../assets/icon/gps.png';
import bike from '../../assets/icon/bike.png';
import discount from '../../assets/icon/discount.png';

export class List extends Component {
  render() {
    return (
      <Container>
        <Card style={styles.cardFilter}>
          <Content padder>
            <ScrollView
              horizontal
              style={{
                display: 'flex',
              }}
              showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection: 'row'}}>
                <Button style={styles.filter}>
                  <Text>Click Me!</Text>
                </Button>
                <Button style={styles.filter}>
                  <Text>Click Me!</Text>
                </Button>
                <Button style={styles.filter}>
                  <Text>Click Me!</Text>
                </Button>
                <Button style={styles.filter}>
                  <Text>Click Me!</Text>
                </Button>
              </View>
            </ScrollView>
          </Content>
        </Card>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Detail Product')}>
          <View style={styles.listItem}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Image source={sayur} style={styles.imgItem} />
                <Text style={styles.promo}>promo</Text>
              </View>
              <View style={{flex: 2}}>
                <Text style={styles.listTitle}>Tomat Italia</Text>
                <Text style={styles.description}>Sayuran Segar</Text>

                {/* ---------------------------------promo & discount--------------------------------------------------- */}
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}>
                    <Image source={star} style={{width: 20, height: 20}} />
                    <Text style={{fontSize: 13}}> 4,5</Text>
                  </View>
                  <View style={{flex: 2, flexDirection: 'row'}}>
                    <Image source={gps} style={{width: 20, height: 20}} />
                    <Text> 2,2 km</Text>
                  </View>
                  <View style={{flex: 2, flexDirection: 'row'}}>
                    <Image source={bike} style={{width: 20, height: 20}} />
                    <Text> Rp.40.000</Text>
                  </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 3}}>
                  <Image source={discount} style={{width: 20, height: 20}} />
                  <Text> Discount 40%</Text>
                </View>
              </View>
            </View>
            <View style={styles.hr} />
          </View>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default List;
