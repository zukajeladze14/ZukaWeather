import { useEffect, useState } from "react";

const Upcoming = (params) => {
  const [weather, setWeather] = useState({});
  const cityInfo = {
    Tbilisi: ["41.6941", "44.8337"],
    Batumi: ["41.6196", "41.6336"],
    Kutaisi: ["42.2675", "42.7199"],
  };

  useEffect(() => {
    let city = params.city;

    params &&
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${cityInfo[city][0]}&lon=${cityInfo[city][1]}&exclude=current,hourly,minutely,alerts&units=metric&appid=dfa26964a9b598f4986f667fed7635c5`
      )
        .then((reponse) => reponse.json())
        .then((data) => setWeather(data));
  }, []);

  return weather;
};

export default Upcoming;
