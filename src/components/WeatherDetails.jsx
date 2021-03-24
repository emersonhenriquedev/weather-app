import React from "react";
import styled from "styled-components";

import { WeatherContext } from "../contexts/WeatherProvider";
import Condition from "./Condition";

const Container = styled.div`
  border-top: 1px solid #b0c5d1;
  border-bottom: 1px solid #b0c5d1;
  margin-top: 20%;
  min-height: 150px;

  @media (max-width: 750px) {
    margin-top: 5%;
  }
`;

const Title = styled.p`
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  padding-top: 2.2rem;
  padding-bottom: 2.2rem;
`;

const WeatherDetails = () => {
  const { weather } = React.useContext(WeatherContext);
  const { humidity, wind_speedy, sunrise, sunset } = weather.results;
  return (
    <Container>
      <Title>Weather Details </Title>
      <div className="conditions">
        <Condition name="Humidity" value={`${humidity}%`} />
        <Condition name="Wind" value={wind_speedy} />
        <Condition name="Sunrise" value={sunrise} />
        <Condition name="Sunset" value={sunset} />
      </div>
    </Container>
  );
};

export default WeatherDetails;
