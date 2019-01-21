import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Library extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Library here</Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Search"
          onPress={() => this.props.navigation.navigate("Search")}
        />
      </View>
    );
  }
}
