import React from 'react';
import Selfie from "./assets/selfie.JPG"
import About from "./assets/about.JPG"
import In from "./assets/in.png"
import Git from "./assets/git.png"

// Syled
import {
  DivIntro, DivIntroPic, H1, MainContainer,
  Logos, DivLogos, DivMenu, SubDivMenu, DivIntroLogo,
  H, H3, DivAboutMe, DivMySkills, DivMyProjects, DivMyProjects1,
  DivMyProjects2, DivMyProjects3, DivContactMe, Footer,
  DivAboutMe1, DivAboutMe2, DivAboutMeTitle, DivAboutMeText,
  DivAboutMeAux, DivMySkillsTitle, DivMySkillsStacks, DivStacksTitle,
  DivMySkillsStack, DivStacksText, DivContactMeTitle, FooterText,
  DivContactMeText, DivContactMeLogos, DivProjectTitle,
  DivProjectMext, DivProjectButtons, DivButtons, ProjectsShowcase

} from "./styled";

function App() {
  return (
    <MainContainer>
      <DivMenu>
        <SubDivMenu>
        <a href="#aboutme"  >about me</a>
        </SubDivMenu>
        <SubDivMenu>
        <a href="#myskills">my skills</a>
        </SubDivMenu>
        <SubDivMenu>
        <a href="#projects">projects</a>
        </SubDivMenu>
        <SubDivMenu>
        <a href="#contactme">contact me</a>
        </SubDivMenu>
      </DivMenu>

      <DivIntro >
        <DivIntroPic>
          <img src={Selfie} />

        </DivIntroPic>

        <H>
          <H1>Hello there :)</H1>
          <H1>My name is Christian Penna Botto</H1>
          <H3> and I am a Front-end developer!</H3>
        </H>


        <DivLogos >
          <Logos>
            <a href="https://github.com/chriss3008" target="_blank">
              <img src={Git} />
            </a>
          </Logos>
          <Logos>
            <a href="https://www.linkedin.com/in/christian-penna-botto-322370175/" target="_blank">
              <img src={In} />
            </a>
          </Logos>
        </DivLogos>

      </DivIntro>


      <DivAboutMe id="aboutme">

        <DivAboutMe1>
          <DivAboutMeAux>
            <DivAboutMeTitle>About me</DivAboutMeTitle>
            <DivAboutMeText>
              <p>
                My name is Christian Penna Botto and I am Brazilian.
                I went to college and got a bachelor's degree in Civil Engineering.
                Interested in the oil$gas industry, more particularly in pipelines,
                I decided to pursue a Master's Degree in Structural Integrity.
                I had to study scientific programming, which led me to study
                programming in general.
              </p>

              <p>
                I decided to join a 6-month Bootcamp.
                It was an immersive and intensive Fullstack one
                I found myself in the web programming area, but more especially, Front-end.
              </p>

              <p>
                In my free time, I like to study, watch tv, play video games, and travel.
                Here's a pic of me during a backpack in The Philippines.
              </p>

            </DivAboutMeText>
          </DivAboutMeAux>
        </DivAboutMe1>
        <DivAboutMe2>
          <img src={About} />
        </DivAboutMe2>
      </DivAboutMe>

      <DivMySkills id="myskills">
        <DivMySkillsTitle>My Skills</DivMySkillsTitle>
        <DivMySkillsStacks>
          <DivMySkillsStack>
            <DivStacksTitle>FRONT-END</DivStacksTitle>
            <DivStacksText>
              <p>
                I can build responsive web applications using HTML, CSS, and JS using clean code principles.
                I also work with React.js and many important libraries, like Redux, Axios,
                Styled-Components, React-Router-Dom, and Material UI.
              </p>

              <p>
                I am a fast learner so I can adapt to new technologies very quickly!
              </p>
            </DivStacksText>
          </DivMySkillsStack>
          <DivMySkillsStack>
            <DivStacksTitle>BACK-END</DivStacksTitle>
            <DivStacksText>
              <p>
                Even though I am a Front-end developer, I have sizeable knowledge in Back-end,
                which makes me be a Front-end developer more seamlessly.
              </p>
              I can build applications using NodeJS, Typescript, and MySQL.
              <p>

              </p>
            </DivStacksText>
          </DivMySkillsStack>
        </DivMySkillsStacks>
      </DivMySkills>

      <ProjectsShowcase id="projects">
        Projects Showcase
      </ProjectsShowcase>

      <DivMyProjects>
        <DivMyProjects1>
          <DivProjectTitle>Food Delivery</DivProjectTitle>
          <DivProjectMext>
          This project is an elaborate Food Delivery site (mobile first). It has many real-life functionalities, like signup/login, authentication and authorization, filters, and search, etc. It uses an educational API.
          </DivProjectMext>

          <DivProjectButtons>
            <a target ="_blank" href="https://food-delivery-christian-penna-botto.surge.sh/">
            <DivButtons>
              Website
            </DivButtons>
            </a>
            <a target ="_blank" href="https://github.com/chriss3008/Food-Delivery-Site">
            <DivButtons>
              Github
            </DivButtons>
            </a>
          </DivProjectButtons>
        </DivMyProjects1>

        <DivMyProjects2>
        <DivProjectTitle>The Movie Database</DivProjectTitle>
          <DivProjectMext>
          This project copies a few functionalities of The Movie Database using its own API. Users can see the most popular movies and tv shows on that day and can also see more details about titles and the cast by clicking on them. The site is responsive and was tested on both mobile and desktop.
          </DivProjectMext>

          <DivProjectButtons>
            <a target ="_blank" href="https://christian-penna-botto-tmdb.surge.sh/">
            <DivButtons>
              Website
            </DivButtons>
            </a>
            <a target ="_blank" href="https://github.com/chriss3008/TMDB">
            <DivButtons>
              Github
            </DivButtons>
            </a>
          </DivProjectButtons>
        </DivMyProjects2>

        <DivMyProjects3>
        <DivProjectTitle>Github User Searcher</DivProjectTitle>
          <DivProjectMext>
          This project is inspired by a legacy assignment for Chama. The home page is a search page where you can search for GitHub users to get some info about them. There is also a history page with the previous terms searched.          </DivProjectMext>

          <DivProjectButtons>
            <a target ="_blank" href="https://github-user-searcher.surge.sh/">
            <DivButtons>
              Website
            </DivButtons>
            </a>
            <a target ="_blank" href="https://github.com/chriss3008/Github-User-Searcher">
            <DivButtons>
              Github
            </DivButtons>
            </a>
          </DivProjectButtons>
        </DivMyProjects3>

      </DivMyProjects>

      <DivContactMe id="contactme">
        <DivContactMeTitle>Contact me</DivContactMeTitle>
<DivContactMeText>
I'm looking for a job where I can learn, develop new skills, and also contribute with everything I know :)
</DivContactMeText>
<DivContactMeText>
        You can contact me by e-mail: christiancmpbotto@gmail.com
</DivContactMeText>
<DivContactMeText>
        Or on one of the following:
</DivContactMeText>
        <DivContactMeLogos>
        <Logos>
            <a href="https://github.com/chriss3008" target="_blank">
              <img src={Git} />
            </a>
          </Logos>
          <Logos>
            <a href="https://www.linkedin.com/in/christian-penna-botto-322370175/" target="_blank">
              <img src={In} />
            </a>
          </Logos>
        </DivContactMeLogos>
      </DivContactMe>

      <Footer>
        <FooterText>
        2022 Christian Penna Botto
        </FooterText>
        
      </Footer>



    </MainContainer>
  );
}

export default App;
