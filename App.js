import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { SongSmith } from "./src/SongSmith";

export default function App() {
  const song = {
    title: "The Boxer",
    artist: "Simon & Garfunkel",
    phrases: [
      { id: 1, text: "in a bottle", notes: "foo", audio: "bar" },
      { id: 2, text: "not much" },
      { id: 3, text: "unlike this one" },
    ],
  };

  return (
    <SafeAreaView>
      <SongSmith song={song} />
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
