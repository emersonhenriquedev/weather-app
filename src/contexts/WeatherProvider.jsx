import React, { useState, useEffect } from "react";

import { api, key } from "../services/api";

export const WeatherContext = React.createContext();

export const WeatherProvider = (props) => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("Salvador,BA");

  useEffect(() => {
    fetchWeather(query);
  }, []);

  const fetchWeather = async (city) => {
    setIsLoading(true);
    try {
      const response = await api.get(
        `?format=json-cors&key=${key}&city_name=${city}`
      );
      console.log(response.data);
      setWeather(response.data);
      setQuery(city);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      alert("Houve um erro na requisição!");
    }
  };

  return (
    <WeatherContext.Provider
      value={{ weather, isLoading, query, setQuery, fetchWeather }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
