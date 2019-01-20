import React, { Component } from "react";
import { TouchableOpacity, Alert, View, Button } from "react-native";

export default class CustomButton extends Component {
  handlePress = () => {
    Alert.alert("Playlist shuffled");
  };
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Button
            onPress={this.handlePress}
            title="SHUFFLE PLAY"
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
    );
  }
}
