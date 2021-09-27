import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  Container,
  Bg,
  VideoBg,
  Contents,
  H1,
  P,
  BtnWrapper,
  ArrowFoward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState();

  const onHover = () => {
    setHover((preve) => !preve);
  };

  return (
    <Container>
      <Bg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </Bg>
      <Contents>
        <H1>virtual banking</H1>
        <P></P>
        <BtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary
            dark
          >
            Get Started
            {hover ? <ArrowFoward /> : <ArrowRight />}
          </Button>
        </BtnWrapper>
      </Contents>
    </Container>
  );
};

export default HeroSection;
