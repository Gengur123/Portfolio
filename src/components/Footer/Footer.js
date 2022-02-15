import React from 'react';
import { AiFillGithub,  AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:meleearthur@gmail.com">
            meleearthur@gmail.com
          </LinkItem>
          
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Always Learning <br/> Never stop improving</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Gengur123" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://github.com/Gengur123" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
