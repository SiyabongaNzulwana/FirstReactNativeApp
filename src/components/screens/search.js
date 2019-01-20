import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Search extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Search here</Text>
        <Button
          title="Go to Library"
          onPress={() => this.props.navigation.navigate("Library")}
        />
      </View>
    );
  }
}
