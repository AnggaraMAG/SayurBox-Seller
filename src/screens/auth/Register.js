import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  CheckBox,
} from 'native-base';
import {styles} from '../../styles/styles';

export class Register extends Component {
  render() {
    return (
      <Container>
        <Content style={{padding: 20}}>
          <View>
            <Text style={styles.Size}>
              Isi Data diri anda secara lengkap dan benar nikmati
            </Text>
            <Text style={styles.Size}>berbagai promo khusus member</Text>
          </View>
          <Content style={{padding: 25}}>
            <Text style={styles.gray}>
              Dapatkan juga PepePoin yang bisa Anda gunakan sebagai diskon untuk
              transaksi berikutnya
            </Text>
          </Content>
          <Form>
            <Item regular>
              <Input placeholder="Email" />
            </Item>
            <Item regular style={styles.mt}>
              <Input placeholder="Nama Lengkap" />
            </Item>
            <Text style={{color: 'grey', fontSize: 8}}>
              Sesuai kartu identitas (KTP/SIM/Paspor)
            </Text>
            <Item regular style={styles.mt}>
              <Input placeholder="Password" />
            </Item>
            <Item regular style={styles.mt}>
              <Input placeholder="Konfirmasi Password" />
            </Item>
            <Button full style={{backgroundColor: '#438D46', marginTop: 10}}>
              <Text style={{color: 'white'}}> Register </Text>
            </Button>
          </Form>
          {/* <View style={{flexDirection: 'row'}}>
            <CheckBox checked color="green" />
            <Text>Finish list Screen</Text>
          </View> */}
        </Content>
      </Container>
    );
  }
}

export default Register;
