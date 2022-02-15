import React from 'react';
import { DiFirebase, DiRuby, DiPython, DiReact, DiZend } from 'react-icons/di';
import { SiJavascript, SiMaterialUi, SiBootstrap, SiGithub, SiVisualstudio, SiDocker } from 'react-icons/si';
import { AiOutlineConsoleSql  } from 'react-icons/ai'
import { GrGraphQl } from 'react-icons/gr'
import { FaAws } from 'react-icons/fa'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of languages, frameworks and libraries during my internship. I love learning new technologies to better equip myself in the ever changing world of programming.
    </SectionText>
    <List>

      <ListItem>
        <ListContainer>
          <ListTitle>
            Web Programming <br/>
            <DiReact size= "2rem"/> {' '}
            <AiOutlineConsoleSql size= "2rem"/> {' '}
            <GrGraphQl size= "2rem"/> {' '}
            <FaAws size= "2rem"/> {' '}
            <SiMaterialUi size= "2rem"/> {' '}
            <SiBootstrap size="2rem"/>
          </ListTitle>
          <ListParagraph>
            React <br/>
            SQL, GraphQL <br/>
            AWS, Amplify, S3, DynamoDB <br/>
            Material UI, Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>
            Languages <br/>
            <SiJavascript size= "2rem"/> {' '}
            <DiRuby size="2rem"/> {' '}
            <DiPython size="2rem"/> {' '}
          </ListTitle>
          <ListParagraph>
            JavaScript  <br/>
            Ruby on Rails <br/>
            Python
          </ListParagraph>
          
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>
            Tools <br/>
            <SiGithub size= "2rem"/> {' '}
            <SiVisualstudio size= "2rem"/> {' '}
            <SiDocker size= "2rem"/> 
          </ListTitle>
          <ListParagraph>
            GitHub<br/>
            Visual Studio Code <br/>
            Docker
          </ListParagraph>
        </ListContainer>
      </ListItem>


    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
