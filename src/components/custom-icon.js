import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

export default class CustomIcon extends Component {
  render() {
    const { name, size, color, style, type } = this.props;
    return (
      <TouchableOpacity style={{ flex: 1 }}>
        <Icon name={name} color={color} size={size} style={style} />
      </TouchableOpacity>
    );
  }
}
