/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View } from "react-native";
import Home from "./src/components/screens/home";
import Search from "./src/components/screens/search";
import Library from "./src/components/screens/library";
import Icon from "react-native-vector-icons/Ionicons";

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

export class App extends Component {
  render() {
    return (
      <View>
        <Home />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: Home,
  Search: Search,
  Library: Library
});

createStackNavigator({
  Home: Home,
  Search: Search,
  Library: Library
});

export default createAppContainer(
  createBottomTabNavigator({
    Home: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => ({
        title: "Home",
        tabBarIcon: <Icon name="ios-home" size={24} />,
        tabBarOptions: {
          activeTintColor: "green",
          inactiveTintColor: "gray"
        }
      })
    },
    Search: {
      screen: Search,
      navigationOptions: ({ navigation }) => ({
        title: "Search",
        tabBarIcon: <Icon name="ios-search" size={24} />,
        tabBarOptions: {
          activeTintColor: "green",
          inactiveTintColor: "gray"
        }
      })
    },
    Library: {
      screen: Library,
      navigationOptions: ({ navigation }) => ({
        title: "Library",
        tabBarIcon: <Icon name="ios-albums" size={24} />,
        tabBarOptions: {
          activeTintColor: "green",
          inactiveTintColor: "gray"
        }
      })
    }
  })
);
