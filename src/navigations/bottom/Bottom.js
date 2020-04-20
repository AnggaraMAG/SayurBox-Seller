import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Shop from '../../screens/Shop';
import Order from '../../screens/MyOrder';
import Inbox from '../../screens/Inbox';
import Chat from '../../screens/Chat';
import Profile from '../../screens/Profile';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export class Bottom extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#438D46',
        }}>
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({color, size}) => (
              <Icon name="shopping-bag" focused color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="My Order"
          component={Order}
          options={{
            tabBarLabel: 'My Order',
            tabBarIcon: ({color, size}) => (
              <Icon2 name="list-unordered" focused color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={Inbox}
          options={{
            tabBarLabel: 'Inbox',
            tabBarIcon: ({color, size}) => (
              <Icon3 name="inbox" focused color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({color, size}) => (
              <Icon4 name="message1" focused color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Icon5 name="user-o" focused color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default Bottom;
