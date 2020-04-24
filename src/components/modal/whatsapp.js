import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'native-base';
import RBSheet from 'react-native-raw-bottom-sheet';

export class whatsapp extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          onPress={() => this.RBSheet.open()}
          full
          style={{
            backgroundColor: '#438D46',
            marginTop: 10,
            padding: 60,
          }}>
          <Text style={{color: 'white'}}>Hub Pembeli</Text>
        </Button>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          duration={250}
          customStyles={{
            container: {
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}>
          <View>
            <View>
              <Text style={{fontSize: 20}}>
                Apakah anda ingin menghubungi pembeli?
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <Button
                onPress={() => this.props.navigation.navigate('Edit Pesanan')}
                full
                style={{
                  backgroundColor: '#438D46',
                  marginTop: 10,
                  padding: 0,
                }}>
                <Text style={{color: 'white'}}>WhatsApp</Text>
              </Button>
            </View>
            <View>
              <Button
                onPress={() => this.props.navigation.navigate('Edit Pesanan')}
                full
                style={{
                  backgroundColor: '#438D46',
                  marginTop: 10,
                  padding: 60,
                }}>
                <Text style={{color: 'white'}}>Call</Text>
              </Button>
            </View>
          </View>
        </RBSheet>
      </View>
    );
  }
}

export default whatsapp;
