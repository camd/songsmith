import React, { useState } from "react";

import { TextInput, View, StyleSheet } from "react-native";

interface PhraseObj {
  text: string;
  notes: string;
  audio: string;
}

export function Phrase({
  phrase,
  onChange,
}: {
  phrase: PhraseObj;
  onChange: () => void;
}) {
  console.log({ phrase });
  const { text, notes, audio } = phrase;

  return (
    <View style={styles.phrase}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Your lyrics"
        onChangeText={onChange}
        defaultValue={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  phrase: {
    backgroundColor: "lightgrey",
    padding: 20,
    marginVertical: 8,
  },
});
