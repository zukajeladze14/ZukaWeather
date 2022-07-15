import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { View } from "react-native";
import Current from "../api/current";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Container from "../components/Container";
import icons from "../components/Icons";

const Home = ({ navigation }) => {
  let [tb, bat, kut] = Current();
  const CityOb = [
    { city: "Tbilisi", weather: tb },
    { city: "Batumi", weather: bat },
    { city: "Kutaisi", weather: kut },
  ];

  return (
    <Container>
      <Text style={styles.header}>WEATHER</Text>
      {CityOb.map((location, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={[styles.city]}
            onPress={() =>
              navigation.navigate("City", {
                itemId: 3,
                city: location.city,
              })
            }
          >
            <Text style={styles.cityHeader}>{location.city.toUpperCase()}</Text>
            {location.weather && (
              <Image
                source={icons[location.weather.weather[0].icon]}
                style={styles.weather}
              ></Image>
            )}
            <Text style={styles.cityHeader}>
              {location.weather &&
                (Number(location.weather.main.temp) - 273).toFixed(1) + "°"}
            </Text>
            <Image
              source={require("../assets/rightArrow.png")}
              style={styles.rightArrow}
            ></Image>
          </TouchableOpacity>
        );
      })}
      <StatusBar style="auto"></StatusBar>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingTop: 20,
    alignItems: "center",
    paddingBottom: "100%",
    back: "#b97580",
    paddingLeft: 20,
    paddingRight: 20,
    backfaceVisibility: "hidden",
  },
  city: {
    padding: 5,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "dotted",
    borderBottomWidth: 2,
    borderColor: "white",
    paddingTop: 40,
    paddingBottom: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  cityHeader: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  blue: {
    backgroundColor: "#0778a4",
  },
  purple: {
    backgroundColor: "#673da5",
  },
  pink: {
    backgroundColor: "#b83d69",
  },
  weather: {
    height: 60,
    width: 60,
  },
  rightArrow: {
    height: 30,
    width: 30,
  },
});

export default Home;
