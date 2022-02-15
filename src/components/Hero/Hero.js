import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there! <br />
        I am Arthur Lee
      </SectionTitle>
      <SectionText style={
        {"width" : "800px"}
      }>
        I am a former professional esports player who found a passion in programming through Video Games. Throughout my journey, I traveled the world, worked with influential personalities and created countless hours of content for thousands of people to enjoy. I love challenges, competition, research and most of all learning. Coding brings all of that and more. I never got bored of it and continued down the path to become a better programmer.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;