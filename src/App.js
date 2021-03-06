// import logo from './logo.svg';
import "./App.css";

import React, { useContext } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

import Sidebar from "./components/Sidebar";
import Weather from "./components/Weather";
import { WeatherContext } from "./contexts/WeatherProvider";

const Background = styled.div`
  min-height: 100vh;

  background-image: url("./assets/${(props) => props.image}");
  background-position: center bottom;
  background-size: cover;
`;

const BackgroundLoader = styled.div`
  background-image: linear-gradient(to bottom, #1ed6ff, #97c1ff);
`;

const Panel = styled.div`
  grid-template-areas: "content sidebar";
  height: 100vh;
  position: relative;

  display: grid;
  grid-template-columns: 2fr 1fr;
  @media (max-width: 750px) {
    grid-template-areas:
      "content"
      "sidebar";
    grid-template-columns: 1fr;
  }
`;

function App() {
  const { isLoading, weather } = useContext(WeatherContext);

  const BackgroundWrapper = ({ image, children }) => {
    switch (image) {
      case "cloud":
      case "cloudly_day":
      case "cloudly_night":
        return <Background image="cloudy.jpg">{children}</Background>;
      case "rain":
      case "hail":
      case "storm":
        return <Background image="rainy.jpg"> {children}</Background>;
      case "clear_night":
        console.log("clear_night");
        return <Background image="clear_night.jpg">{children}</Background>;
      default:
        return <Background image="suny.jpg"> {children}</Background>;
    }
  };
  if (isLoading) {
    return (
      <BackgroundLoader>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Loader type="Bars" height={100} width={100} color="#fff" />
        </div>
      </BackgroundLoader>
    );
  }
  return (
    <div className="App">
      <BackgroundWrapper image={weather.results.condition_slug}>
        <Panel>
          <Weather />
          <Sidebar />
        </Panel>
      </BackgroundWrapper>
    </div>
  );
}

export default App;
