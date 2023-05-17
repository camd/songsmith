import React, { useState } from "react";
import { phraseType } from "../types";
import { TextInput, View, StyleSheet } from "react-native";
import { Button as MKButton, MKColor } from "react-native-material-kit";

export function Phrase({
  phrase,
  onChange,
}: {
  phrase: phraseType;
  onChange: () => void;
}) {
  console.log({ phrase });
  const { text, notes, audio } = phrase;
  const [phraseText, setPhraseText] = useState(text);

  return (
    <View style={styles.phrase}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Your lyrics"
        onChangeText={setPhraseText}
        defaultValue={phraseText}
      />
      <MKButton
        shadowRadius={2}
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.7}
        shadowColor="black"
        onPress={() => {
          console.log("hi, raised button!");
        }}
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
