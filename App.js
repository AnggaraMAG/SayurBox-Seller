import React, {Component} from 'react';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import Reset from './src/screens/auth/Reset';
import BottomNav from './src/navigations/bottom/Bottom';
import Pesanan from './src/screens/Pesanan/Pesanan';
import Detail from './src/screens/Pesanan/Detail';
import Landing from './src/screens/Home/Landing';
import List from './src/screens/ListProduk/list';
import Add from './src/screens/Add';
import History from './src/screens/History/History';
import Inbox from './src/screens/Inbox';
import Kirim from './src/screens/Pesanan/Kirim';
import Maptracking from './src/screens/Maptracking/Map';
import EditPesanan from './src/screens/Pesanan/Editpesanan';
import DetailH from './src/screens/History/Detail';
import Complete from './src/screens/Complete/Complete';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Detail"
          headerMode="screen"
          screenOptions={{
            headerTintColor: 'black',
            headerStyle: {backgroundColor: 'white'},
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
            name="Landing"
            component={Landing}
          />

          <Stack.Screen
            options={{headerShown: false}}
            name="List"
            component={List}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Add"
            component={Add}
          />
          <Stack.Screen
            options={{
              title: 'Activity History',
            }}
            name="History"
            component={History}
          />
          <Stack.Screen
            options={{
              title: '23 April 2020',
            }}
            name="Detail History"
            component={DetailH}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Inbox"
            component={Inbox}
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
          <Stack.Screen
            options={{title: 'Daftar Pesanan'}}
            name="Edit Pesanan"
            component={EditPesanan}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Kirim Pesanan"
            component={Kirim}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Map Tracking"
            component={Maptracking}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Complete"
            component={Complete}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
