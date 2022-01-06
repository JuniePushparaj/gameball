import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ImageBackground
} from "react-native";
import { useState } from "react";
import Coin from "./Coin";
import image from "../images/gameball.jpeg";

function App() {
  let [side, flip] = useState(0);
  let [spin, setSpin] = useState(false);
  let [text, setText] = useState("");
  const handleClick = () => {
    setSpin(true);
    setText("");
    setTimeout(() => {
      setSpin(false);
      let toss = Math.floor(Math.random() * 2);
      flip(toss);
      setText(toss ? "Heads" : "Tails");
    }, 2000);
  };
  return (
    <View style={styles.app}>
      <Text style={styles.title}>Toss:{text}</Text>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.header}>
          {spin ? <ActivityIndicator size="large" color="#00ff00" /> : ""}
          {!spin ? <Coin side={side} /> : ""}
        </View>
      </ImageBackground>
      <Button
        onPress={() => {
          handleClick();
        }}
        title="Flip Coin"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    textAlign: "center"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
