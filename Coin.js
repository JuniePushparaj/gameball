import React from "react";
import { Image, StyleSheet } from "react-native";
import head from "../images/head.png";
import tail from "../images/tail.png";
const Coin = (props) => {
  const { side } = props;
  return (
    <>
      {side ? (
        <Image
          accessibilityLabel="Coin Head"
          source={head}
          resizeMode="contain"
          style={styles.logo}
        />
      ) : (
        <Image
          accessibilityLabel="Coin Tail"
          source={tail}
          resizeMode="contain"
          style={styles.logo}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 140,
    justifyContent: "center"
  }
});
export default Coin;
