import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomIcon from "../components/custom-icon";

const songs = [
  {
    title: "1919",
    hits: 234738,
    rating: "Explicit"
  },
  {
    title: "1919",
    hits: 234738,
    rating: "Explicit"
  },
  {
    title: "1919",
    hits: 234738,
    rating: "Explicit"
  },
  {
    title: "1919",
    hits: 234738,
    rating: "Explicit"
  },
  {
    title: "1919",
    hits: 234738,
    rating: "Explicit"
  },
  {
    title: "1919",
    hits: 234738,
    rating: "Explicit"
  },
  {
    title: "1919",
    hits: 234738,
    rating: "Explicit"
  },
  {
    title: "1919",
    hits: 234738,
    rating: "Explicit"
  },
  {
    title: "1919",
    hits: 234738,
    rating: "Explicit"
  },
  {
    title: "1919",
    hits: 234738,
    rating: "Explicit"
  },
  {
    title: "1919",
    hits: 234738,
    rating: "Explicit"
  },
  {
    title: "1919",
    hits: 234738,
    rating: "Explicit"
  }
];
class Playlist extends Component {
  render() {
    return (
      <LinearGradient
        colors={["transparent", "black", "black"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View
          style={{
            padding: 20,
            alignItems: "baseline",
            overflow: "scroll",
            height: 110
          }}
        >
          <ScrollView>
            {songs.map((song, idx) => (
              <View key={idx} style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "white",
                    marginRight: 10,
                    alignSelf: "center"
                  }}
                >
                  {idx + 1}
                </Text>
                <View>
                  <View
                    style={{ flexDirection: "row", alignContent: "stretch" }}
                  >
                    <Text style={{ color: "white" }}>{song.title}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        color: "black",
                        alignContent: "center",
                        backgroundColor: "#ccc",
                        padding: 2,
                        borderRadius: 5,
                        marginRight: 10,
                        marginTop: 4,
                        paddingHorizontal: 3
                      }}
                    >
                      {song.rating}
                    </Text>
                    <Text style={{ color: "white", alignSelf: "center" }}>
                      {song.hits}
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        marginHorizontal: 196
                      }}
                    >
                      <CustomIcon
                        style={{ width: 50, height: 50 }}
                        name="ios-more"
                        size={24}
                        color="white"
                      />
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}

export default Playlist;
