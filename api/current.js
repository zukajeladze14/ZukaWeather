import { useEffect, useState } from "react";

const Current = () => {
  const [tbilisi, setTbilisi] = useState();
  const [batumi, setBatumi] = useState();
  const [kutaisi, setKutaisi] = useState();
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&appid=dfa26964a9b598f4986f667fed7635c5"
    )
      .then((response) => response.json())
      .then((data) => setTbilisi(data))
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Batumi&appid=dfa26964a9b598f4986f667fed7635c5"
    )
      .then((response) => response.json())
      .then((data) => setBatumi(data))
      .catch((error) => {
        console.error("Error:", error);
      });
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Kutaisi&appid=dfa26964a9b598f4986f667fed7635c5"
    )
      .then((response) => response.json())
      .then((data) => setKutaisi(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return [tbilisi, batumi, kutaisi];
};

export default Current;
