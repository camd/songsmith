import React, { useState } from "react";
import {
  SafeAreaView,
} from "react-native";
import {SongSmith} from "./src/SongSmith";

export default function App() {
  const [song, setSong] = useState({
    title: "The Boxer",
    artist: "Simon & Garfunkel",
    phrases: [
      { id: 1, text: "in a bottle" },
      { id: 2, text: "not much" },
      { id: 3, text: "unlike this one" },
    ],
  });

  return (
    <SafeAreaView>
      <SongSmith song={song}/>
    </SafeAreaView>
  );
}

