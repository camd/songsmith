import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { Phrase } from "./Phrase";

export const SongSmith = (song: any) => {
    const [phrases, setPhrases] = useState(song.phrases);
    
return (
    <>
    <Text style={styles.titleText}>SongSmith</Text>

    <FlatList
      data={phrases}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Phrase phrase={item} onChange={() => alert("changed")} />}
      />
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
      </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });
  