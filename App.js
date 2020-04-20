import React, {Component} from 'react';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import Reset from './src/screens/auth/Reset';
import BottomNav from './src/navigations/bottom/Bottom';
import Pesanan from './src/screens/Pesanan/Pesanan';
import Detail from './src/screens/Pesanan/Detail';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Pesanan"
          headerMode="screen"
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#438D46'},
          }}>
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Register"
            component={Register}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Reset Password"
            component={Reset}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Bottom"
            component={BottomNav}
          />
          <Stack.Screen
            options={{
              title: 'Pesanan',
            }}
            name="Pesanan"
            component={Pesanan}
          />
          <Stack.Screen
            options={{
              title: 'Detail',
            }}
            name="Detail"
            component={Detail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
