import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View, Image, TextInput} from 'react-native';
import {styles} from '../../styles/styles';
import sayur from '../../assets/images/jpg1.jpg';
import {Form, Item, Input, Button, Container} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import {connect} from 'react-redux';
import {checkLogin, thisUser} from '../../../_actions/auth';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.props.thisUser();
  }

  loginuser = () => {
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.checkLogin(data);
    this.props.navigation.navigate('Landing');
    // this.setState({isLoading: true});
  };

  handleChange1 = email => {
    this.setState({email});
  };

  handleChange2 = password => {
    this.setState({password});
  };

  render() {
    const {data} = this.props.login;
    const {authenticated, isLoading, isLogin} = this.props.login;
    console.log(data, authenticated, 'login');
    return (
      <Container>
        <Spinner visible={isLoading} />
        <Image source={sayur} style={styles.ImgSayur} />
        <Container style={{padding: 10}}>
          <View>
            <Text style={styles.Size}>
              Login untuk mempermudah anda melacak orders
            </Text>
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.gray}>
              Anda dapat melanjutkan belanja dengan login menggunakan social
              media
            </Text>
          </View>
          <Form style={{padding: 10}}>
            <Item regular>
              <TextInput
                style={styles.input}
                value={this.state.email}
                maxLength={256}
                placeholder="Enter email..."
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                onChangeText={this.handleChange1}
                underlineColorAndroid="transparent"
                placeholderTextColor="#999"
              />
            </Item>
            <Item regular style={styles.mt}>
              <TextInput
                ref={node => {
                  this.passwordInput = node;
                }}
                style={styles.input}
                value={this.state.password}
                maxLength={40}
                placeholder="Enter password..."
                onChangeText={this.handleChange2}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                blurOnSubmit
                onSubmitEditing={this.loginuser.bind(this)}
                secureTextEntry
                underlineColorAndroid="transparent"
                placeholderTextColor="#999"
              />
            </Item>
            <Button
              full
              style={{backgroundColor: '#438D46', marginTop: 10}}
              onPress={this.loginuser}>
              <Text style={{color: 'white'}}> Login </Text>
            </Button>
            <View style={{flexDirection: 'row', marginTop: 6}}>
              <Text style={{color: '#576357'}}>Lupa Password?</Text>
              <Text
                style={{color: '#438D46'}}
                onPress={() =>
                  this.props.navigation.navigate('Reset Password')
                }>
                Klik Disini
              </Text>
            </View>
          </Form>
          <Container style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row', marginTop: 40}}>
              <Text style={{color: '#576357'}}>Belum punya account?</Text>
              <Text
                style={{color: '#438D46'}}
                onPress={() => this.props.navigation.navigate('Register')}>
                Daftar disini
              </Text>
            </View>
          </Container>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    checkLogin: data => dispatch(checkLogin(data)),
    thisUser: () => dispatch(thisUser()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
