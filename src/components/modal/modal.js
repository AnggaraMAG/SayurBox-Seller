import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from '../../styles/modal';

export class modal extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  render() {
    return (
      <View>
        <Button title="Terima" onPress={this.toggleModal} />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.container}>
            <Text style={styles.text}>Apakah Pembelian Sesuai Pesanan?</Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{marginRight: 5}}>
                <Button
                  title="Ya"
                  onPress={() => this.props.navigation.navigate('Edit Pesanan')}
                />
              </View>
              <View>
                <Button title="Edit Pesanan" onPress={this.toggleModal} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default modal;
