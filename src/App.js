import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Phrase } from "./Phrase";

export default function App() {
  const [phrases, setPhrases] = useState([
    { id: 1, text: "in a bottle" },
    { id: 2, text: "not much" },
    { id: 3, text: "unlike this one" },
  ]);

  return (
    <SafeAreaView>
      <Text style={styles.titleText}>Songwriter Begin!</Text>

      <FlatList
        data={phrases}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Phrase phrase={item} />}
      />
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
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
