import React, { Component } from "react";
import { Text } from "react-native";

export default class CustomText extends Component {
  render() {
    const { text, color, style } = this.props;
    return (
      <Text text={text} color={color} style={style}>
        {this.props.text}
      </Text>
    );
  }
}
