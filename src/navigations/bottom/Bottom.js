import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Shop from '../../screens/Shop';
import Order from '../../screens/MyOrder';
import Inbox from '../../screens/Inbox';
import Chat from '../../screens/Chat';
import Profile from '../../screens/Profile';

const Tab = createBottomTabNavigator();

export class Bottom extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="My Order" component={Order} />
        <Tab.Screen name="Inbox" component={Inbox} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }
}

export default Bottom;
