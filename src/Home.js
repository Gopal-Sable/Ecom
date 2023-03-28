import React from "react";
import styled from "styled-components";

import HeroSection from "./components/HeroSection";

const Home = () => {
  return <HeroSection name="Gops Store"/>
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;
