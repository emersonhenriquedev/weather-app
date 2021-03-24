import React from "react";
import styled from "styled-components";
import {
  IoSunnyOutline,
  IoCloudOutline,
  IoRainyOutline,
  IoMoonOutline,
} from "react-icons/io5";

import { WeatherContext } from "../contexts/WeatherProvider";

const WeatherContainer = styled.div`
  grid-area: content;
  text-align: center;
  width: 70%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6% 3%;

  @media (max-width: 750px) {
    padding: 6% 1%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const WeatherWidgets = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  .temperature {
    color: #fff;
    font-size: 5rem;
    margin: 0;
  }
  .cityBox {
    margin: 0;
  }
  .city {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  .date {
    color: #fff;
    font-size: 1rem;
    margin: 0;
  }

  @media (max-width: 750px) {
    .temperature {
      font-size: 3rem;
    }
    .city {
      font-size: 1.5rem;
      margin: 0;
    }
    .date {
      font-size: 0.8rem;
    }
  }
`;

const Weather = () => {
  const { weather } = React.useContext(WeatherContext);

  const Icon = (name) => {
    switch (name) {
      case "cloud":
      case "cloudly_day":
      case "cloudly_night":
        return <IoCloudOutline size="3em" color="#fff" />;
      case "rain":
      case "hail":
      case "storm":
        return <IoRainyOutline size="3em" color="#fff" />;
      case "clear_night":
      case "cloudly_night":
        return <IoMoonOutline size="3em" color="#fff" />;
      default:
        return <IoSunnyOutline size="3em" color="#fff" />;
    }
  };
  return (
    <WeatherContainer>
      <strong style={{ color: "#fff" }}>the.weather</strong>
      <WeatherWidgets>
        <p className="temperature">{weather.results.temp}°</p>
        <div className="cityBox">
          <p className="city">{weather.results.city}</p>
          <p className="date">{weather.results.date}</p>
        </div>
        <Icon name={weather.condition_slug} />
      </WeatherWidgets>
    </WeatherContainer>
  );
};

export default Weather;
