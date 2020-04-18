import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from '../../styles/styles';
import sayur from '../../assets/images/jpg1.jpg';
import {
  Form,
  Item,
  Input,
  Button,
  Right,
  Container,
  Content,
} from 'native-base';

export class Login extends Component {
  render() {
    return (
      <Container>
        <Image source={sayur} style={styles.ImgSayur} />
        <Content padder>
          <View>
            <Text style={styles.Size}>
              Login untuk mempermudah anda melacak orders
            </Text>
          </View>
          <View>
            <Text style={styles.gray}>
              Anda dapat melanjutkan belanja dengan login menggunakan social
              media
            </Text>
          </View>
          <Form>
            <Item regular>
              <Input placeholder="Email" />
            </Item>
            <Item regular style={styles.mt}>
              <Input placeholder="Password" />
            </Item>
            <Button full style={{backgroundColor: '#438D46', marginTop: 10}}>
              <Text style={{color: 'white'}}> Login </Text>
            </Button>
          </Form>
          <View style={{flexDirection: 'row', marginTop: 6}}>
            <Text style={{color: '#576357'}}>Lupa Password?</Text>
            <Text
              style={{color: '#438D46'}}
              onPress={() => this.props.navigation.navigate('Register')}>
              {' '}
              Klik Disini
            </Text>
          </View>
          {/* <View
            style={{marginTop: 13, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#576357'}}>Belum Punya akun?</Text>
            <Text style={{color: '#438D46'}}> Daftar Disini</Text>
          </View> */}
        </Content>
      </Container>
    );
  }
}

export default Login;
