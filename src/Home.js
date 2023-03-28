import React from "react";
import styled from "styled-components";

import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";

const Home = () => {
  return <>
    <HeroSection name="Gops Store"/>
    <Services/>
    <Trusted/>
     </>
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;
