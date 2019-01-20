import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import CustomButton from "../custom-button";
import LinearGradient from "react-native-linear-gradient";
import Playlist from "../playlist";
import CustomIcon from "../custom-icon";
import CustomText from "../custom-text";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    fontSize: 70,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold"
  },
  listeners: {
    fontSize: 10,
    color: "white",
    padding: 10
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5
  },
  right: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "stretch",
    alignItems: "baseline"
  },
  following: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#d6d7da",
    marginRight: 20,
    color: "white"
  },
  colorWhite: {
    color: "#fff"
  }
});

export default class App extends Component {
  static navigationOptions = {
    title: null,
    headerLeft: (
      <CustomIcon
        style={{ paddingLeft: 10 }}
        name="ios-arrow-back"
        size={24}
        color="white"
      />
    ),
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: (
      <View style={styles.right}>
        <TouchableOpacity style={styles.following}>
          <View>
            <Text style={{ color: "white", padding: 7 }}>FOLLOWING</Text>
          </View>
        </TouchableOpacity>
        <CustomIcon
          name="ios-more"
          size={24}
          color="white"
          style={{ fontWeight: "bold" }}
        />
      </View>
    ),
    headerTransparent: true,
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      name: "High",
      surname: "Klassified",
      listerners: "46, 856",
      popularity: "Popular"
    };
  }
  handlePress = () => {
    Alert.alert("Playlist shuffled");
  };

  render() {
    return (
      <ImageBackground
        source={require("../../../public/images/HighKlassified.jpg")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          alignSelf: "baseline"
        }}
      >
        <LinearGradient
          colors={["transparent", "black", "black"]}
          style={[
            styles.linearGradient,
            { flex: 1, justifyContent: "flex-start" }
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0, 0.75]}
        >
          <View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View>
                <Text style={[styles.colorWhite, { textAlign: "center" }]}>
                  <CustomText
                    text="High"
                    color="white"
                    style={{ fontSize: 70, fontWeight: "bold" }}
                  />
                </Text>
                <Text style={[styles.colorWhite, { textAlign: "center" }]}>
                  <CustomText
                    text="Klassified"
                    color="white"
                    style={{ fontSize: 70, fontWeight: "bold" }}
                  />
                </Text>
              </View>
              <View>
                <Text style={[styles.colorWhite, { padding: 10 }]}>
                  <CustomText
                    text={this.state.listerners + " MONTHLY LISTENERS"}
                    color="white"
                    style={{ fontSize: 10 }}
                  />
                </Text>
              </View>
              <View
                style={{
                  width: "70%",
                  backgroundColor: "#00cc66",
                  justifyContent: "center",
                  borderRadius: 30,
                  alignItems: "center",
                  margin: 4,
                  padding: 10,
                  marginBottom: 15
                }}
              >
                <CustomButton
                  onPress={this.props.onPress}
                  title={this.props.title}
                />
              </View>
              <View>
                <Text style={[styles.colorWhite, { textAlign: "center" }]}>
                  <CustomText
                    text={this.state.popularity}
                    color="white"
                    style={{ fontSize: 25, fontWeight: "bold" }}
                  />
                </Text>
              </View>
              <View />
            </View>

            <Playlist />
          </View>
        </LinearGradient>
      </ImageBackground>
    );
  }
}
