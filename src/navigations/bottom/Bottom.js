import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddProduct from "../../screens/AddProduk/Add";
import Order from "../../screens/Pesanan/Pesanan";
import List from "../../screens/ListProduk/list";
import History from "../../screens/History/History";
import Profile from "../../screens/Profile";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Octicons";
import Icon4 from "react-native-vector-icons/FontAwesome5";
import Icon5 from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export class Bottom extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="List Product"
        tabBarOptions={{
          activeTintColor: "#438D46"
        }}
      >
        <Tab.Screen
          name="My Order"
          component={Order}
          options={{
            tabBarLabel: "My Order",
            tabBarIcon: ({ color, size }) => (
              <Icon4 name="shopping-basket" focused color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="List Product"
          component={List}
          options={{
            tabBarLabel: "List Product",
            tabBarIcon: ({ color, size }) => (
              <Icon2 name="list-unordered" focused color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddProduct}
          options={{
            tabBarLabel: "Add Product",
            tabBarIcon: ({ color, size }) => (
              <Icon name="md-add" focused color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            title: "Activity History",
            tabBarLabel: "History",
            tabBarIcon: ({ color, size }) => (
              <Icon4 name="history" focused color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Icon5 name="user-o" focused color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default Bottom;
