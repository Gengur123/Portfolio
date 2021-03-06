import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Container, Div2, Div3, NavLink, SocialIcons} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div2>
      <li>
        <Link href="https://gengur123.github.io/Portfolio/#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="https://gengur123.github.io/Portfolio/#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="https://gengur123.github.io/Portfolio/#aboutt">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Gengur123" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/Gengur123" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
