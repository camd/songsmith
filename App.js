import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [phrases, setPhrases] = useState(["in a bottle", "not much", "unlike this one"]);

  return (
    <ScrollView>
  {phrases.map((phrase) => (
    <View>
    <TextInput 
      style={{height: 40}} 
      placeholder="Your lyrics" 
      onChangeText={newPhrase => setPhrases([newPhrase, ...phrases])}
      defaultValue={phrase} />
    </View>
  ))}
      <Text>Songwriter Begin!</Text>
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
