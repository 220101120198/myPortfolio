import React from 'react'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import {Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br/>
              {Bio.name}
            </Title>
            <TextLoop>
              I am about
              <Span>
                <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
              }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>

          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default HeroSection