import React, {Component} from 'react';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import Reset from './src/screens/auth/Reset';
import BottomNav from './src/navigations/bottom/Bottom';
import Pesanan from './src/screens/Pesanan/Pesanan';
import Detail from './src/screens/Pesanan/Detail';
import Landing from './src/screens/Home/Landing';
import List from './src/screens/ListProduk/list';
import History from './src/screens/History/History';
import Inbox from './src/screens/Inbox/Inbox';
import Kirim from './src/screens/Pesanan/Kirim';
import Maptracking from './src/screens/Maptracking/Map';
import EditPesanan from './src/screens/Pesanan/Editpesanan';
import DetailH from './src/screens/History/Detail';
import DetailL from './src/screens/ListProduk/listdetail';
import DetailI from './src/screens/Inbox/InboxDetail';
import Complete from './src/screens/Complete/Complete';
import AddProduk from './src/screens/AddProduk/Add';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './src/screens/Profile';

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="List"
          headerMode="screen"
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#669F43'},
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
            options={{title: 'Add Product'}}
            name="Add Product"
            component={AddProduk}
          />
          <Stack.Screen
            options={{title: 'Daftar Produk'}}
            name="List"
            component={List}
          />
          <Stack.Screen
            options={{
              title: 'Edit Produk',
            }}
            name="Edit Produk"
            component={DetailL}
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
            options={{title: 'Inbox'}}
            name="Inbox"
            component={Inbox}
          />
          <Stack.Screen
            options={{title: 'Detail Inbox'}}
            name="Detail Inbox"
            component={DetailI}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Reset Password"
            component={Reset}
          />
          <Stack.Screen
            options={{title: 'Back'}}
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
          <Stack.Screen
            options={{title: 'Profile'}}
            name="Profile"
            component={Profile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
