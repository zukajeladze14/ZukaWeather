import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import icons from "./Icons";
import water from "../assets/water-drop.png";
let width = Dimensions.get("window").width - 60;

const ListItem = (props) => {
  const weekDays = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  let date = new Date(props.weather.dt * 1000);
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{weekDays[date.getDay()]}</Text>
      {props.weather && (
        <Image
          source={icons[props.weather.weather[0].icon]}
          style={styles.weather}
        ></Image>
      )}
      <Text style={styles.info}>
        {props.weather.temp.day.toFixed(1) +
          "°" +
          "/" +
          props.weather.temp.night.toFixed(1) +
          "°"}
      </Text>
      <Text style={styles.info}>
        {props.weather.humidity}%{" "}
        <Image source={water} style={styles.water}></Image>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
    width: width,
  },
  day: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    minWidth: 100,
  },
  info: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  weather: {
    height: 60,
    width: 60,
  },
  water: {
    width: 15,
    height: 15,
  },
});

export default ListItem;
