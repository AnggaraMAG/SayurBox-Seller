import React, {Component} from 'react';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import Reset from './src/screens/auth/Reset';
import BottomNav from './src/navigations/bottom/Bottom';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
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
          /> */}
          <Stack.Screen
            options={{headerShown: false}}
            name="Bottom"
            component={BottomNav}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
