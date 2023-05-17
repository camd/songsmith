import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Phrase } from "./Phrase";
import { songType } from "../types";

export interface SongProps {
  song: songType;
}

export const SongSmith = ({ song }: SongProps) => {
  console.log({ song });
  const { title, artist } = song;
  const [phrases, setPhrases] = useState(song.phrases);
  console.log({ phrases });

  return (
    <>
      <Text style={styles.titleText}>SongSmith</Text>

      <FlatList
        data={song.phrases}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => (
          <Phrase phrase={item} onChange={() => alert("changed")} />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
