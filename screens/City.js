import {
  Text,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
  StatusBar,
} from "react-native";
import Container from "../components/Container";
import back from "../assets/rightArrow.png";
import Upcoming from "../api/upcoming";
import ListItem from "../components/ListItem";

const City = ({ navigation, route }) => {
  let { city } = route.params;
  let weather = Upcoming(route.params);
  return (
    <Container>
      <Pressable style={styles.arrow} onPress={() => navigation.goBack()}>
        <Image source={back} style={styles.back}></Image>
      </Pressable>
      <Text style={styles.header}>
        {city} {"Next 7 Days"}
      </Text>
      {weather && (
        <FlatList
          data={weather.daily}
          renderItem={({ item }) => {
            return <ListItem weather={item}></ListItem>;
          }}
        ></FlatList>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  arrow: {
    transform: [{ rotate: "180deg" }],
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    left: 10,
  },
  header: {
    fontSize: 25,
    marginBottom: 30,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
    textAlign: "center",
  },
  listContainer: {
    width: "100%",
  },
  back: { width: 40, height: 40 },
});

export default City;
