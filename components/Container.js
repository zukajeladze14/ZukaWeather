import { StyleSheet, ImageBackground, StatusBar } from "react-native";
import bck from "../assets/bck.jpg";

const Container = (props) => {
  return (
    <ImageBackground source={bck} style={styles.container}>
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingTop: 20,
    alignItems: "center",
    back: "#b97580",
    paddingLeft: 20,
    paddingRight: 20,
    backfaceVisibility: "hidden",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Container;
