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
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/Ionicons";

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
        tabBarIcon: <Icon name="home" type="entypo" size={24} />,
        backgroundColor: "red",
        tabBarOptions: {
          activeTintColor: "white",
          inactiveTintColor: "black",
          style: {
            backgroundColor: "#404040"
          }
        }
      })
    },
    Search: {
      screen: Search,
      navigationOptions: ({ navigation }) => ({
        title: "Search",
        tabBarIcon: <Icon name="magnifying-glass" type="entypo" size={24} />,
        tabBarOptions: {
          activeTintColor: "white",
          inactiveTintColor: "black",
          style: {
            backgroundColor: "#404040"
          }
        }
      })
    },
    Library: {
      screen: Library,
      navigationOptions: ({ navigation }) => ({
        title: "Library",
        tabBarIcon: <Icon2 name="ios-albums" type="entypo" size={24} />,
        tabBarOptions: {
          activeTintColor: "white",
          inactiveTintColor: "black",
          style: {
            backgroundColor: "#404040"
          }
        }
      })
    }
  })
);
