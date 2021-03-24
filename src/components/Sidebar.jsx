import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

import WeatherDetails from "./WeatherDetails";
import { WeatherContext } from "../contexts/WeatherProvider";

const SidebarContainer = styled.aside`
  grid-area: sidebar;
  background-color: rgba(21, 44, 68, 0.4);
  backdrop-filter: blur(5px);
  position: relative;
`;

const Panel = styled.div`
  background-color: transparent;
  padding: 12%;

  @media (max-width: 750px) {
    padding: 4% 10%;
  }
`;

const Input = styled.input`
  type: "text";
  outline: none;
  border: none;
  box-shadow: none;

  /* border-bottom: 1px solid #b0c5d1; */
  background-color: transparent;
  color: #b0c5d1;
  height: 25px;
  font-size: 1.1rem;
`;

const Button = styled.button`
  height: 4rem;
  width: 4rem;
  background-color: #a9cee1;
  border: none;
  cursor: pointer;

  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: 750px) {
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    display: block;
    width: 100%;
    padding: 1% 1%;
    margin-top: 2%;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;

const Sidebar = () => {
  const { query, fetchWeather } = useContext(WeatherContext);
  const [city, setCity] = useState(query);

  return (
    <SidebarContainer>
      <Panel>
        <div>
          <Input
            placeholder="Another Location"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button onClick={() => fetchWeather(city)}>
            <FiSearch size="1.2rem" />
          </Button>
        </div>
        <WeatherDetails />
      </Panel>
    </SidebarContainer>
  );
};

export default Sidebar;
