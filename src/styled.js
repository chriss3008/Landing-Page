import styled from "styled-components";

const color1 = "#a993de";
const color2 = "#dc92aa";
const color3 = "#e8ae7a";
const color4 = "#e8eacb";
const color5 = "#cdeaea";
const color6 = "#263f8c";
const color7 = "#f26363";

export const MainContainer = styled.div`
font-family: 'Montserrat';
width:100vw;
`

// Menu top

export const DivMenu = styled.div`
display: flex;
flex-direction: row;
column-gap: 20px;
justify-content: flex-end;
padding-right: 20px;
padding-top: 10px;
cursor: pointer;
font-weight: 500;
color: white;
background-color: ${color2};
@media(max-width: 800px) {
    justify-content: space-evenly;
    font-size: 15px;
}
`

export const SubDivMenu = styled.div`
text-decoration: none;
a{
  text-decoration: none;
}

`

export const SubDivMenu2 = styled.div`
display: flex;
flex-direction: row;
column-gap: 30px;
`

// Intro

export const DivIntro = styled.div`
background-color: ${color1};
display: flex;
flex-direction: row;
width:100vw;
color: white;
@media(max-width: 800px) {
  flex-direction: column;
  }
`

export const DivIntroPic = styled.div`
width:30vw;
img{
    width:30vw;
    height: 100%;
    mix-blend-mode: multiply;
}
@media(max-width: 800px) {
    img{
    width:100vw;
}
  }
`



export const H1 = styled.h1`

`

export const H3 = styled.h3`

`

export const H = styled.div`
margin: auto;
@media(max-width: 800px) {
  padding-left: 15px;
}
`

export const DivLogos = styled.div`
display: flex;
flex-direction: column;
row-gap: 40px;
justify-content: center;
padding-right: 20px;
@media(max-width: 800px) {
  flex-direction: row;
  column-gap: 20px;
  padding-right: 0px;
  padding-bottom: 15px;
  }

`
export const Logos = styled.div`
img{
    width:50px;
}
@media(max-width: 800px) {
  img{
    width:30px;
}
  }

`


// About me

export const DivAboutMe = styled.div`
background-color: ${color5};
display: flex;
flex-direction: row;
justify-content: space-evenly;
width:100vw;
@media(max-width: 800px) {
  flex-direction: column;
  width:100vw;
}
`

export const DivAboutMe1 = styled.div`
color: ${color6};
display: flex;
flex-direction:column;
width: 30%;
@media(max-width: 800px) {
  width: 100%;
}
`

export const DivAboutMeAux = styled.div`
@media(max-width: 800px) {
  padding-left: 15px; 
   padding-right: 15px;
}
`


export const DivAboutMeTitle = styled.h2`
@media(max-width: 800px) {
  width: 100%;
}
`

export const DivAboutMeText= styled.div`
word-break: normal;
@media(max-width: 800px) {
  width: 100%;
}
`

export const DivAboutMe2 = styled.div`
padding-top: 20px;
padding-bottom: 20px;
img{
  width:333px;
  height:333px;
  object-fit:cover;
  border-radius:50%;
  margin: 4px 0 0 4px;
    box-shadow: 0 0 0 7px #fff;    
}
@media(max-width: 800px) {
  width:100vw;
  img{
  width:100vw;
  border-radius:0%;
  margin: 0px;
}
}
`


// Skills

export const DivMySkills = styled.div`
color: ${color2};
background-color: ${color6};
display: flex;
flex-direction: column;
width:100vw;
text-align: center;
`

export const DivMySkillsTitle = styled.h2`
@media(max-width: 800px) {
  width: 100%;
}
`

export const DivMySkillsStacks = styled.div`
color: ${color7};
display: flex;
flex-direction: row;
justify-content: space-evenly;
@media(max-width: 800px) {
  flex-direction: column;
  width: 100%;
}
`

export const DivMySkillsStack = styled.div`
display: flex;
flex-direction: column;
width: 30vw;

@media(max-width: 800px) {
  flex-direction: column;
  width: 100%;
}
`
export const DivStacksTitle = styled.h1`

@media(max-width: 800px) {
  width: 100%;
}
`

export const DivStacksText = styled.div`
word-break: normal;
font-size: 18px;
text-align: start;
@media(max-width: 800px) {
  width: 90%;
  padding-left: 15px; 
   padding-right: 15px;
}
`



// My Projects

export const ProjectsShowcase = styled.div`
background-image: linear-gradient(90deg, ${color2} 33.33%, ${color4} 33.33%, ${color4} 66.66%, ${color3} 66.66%);
text-align: center;
color: ${color6};
font-size: 3em;
padding-top: 15px;
padding-bottom: 30px;
@media(max-width: 800px) {
  background: ${color2}
}
`

export const DivMyProjects = styled.div`
display: flex;
flex-direction: row;
color: ${color6};
width:100vw;
@media(max-width: 800px) {
  flex-direction: column;
}
`

export const DivMyProjects1 = styled.div`
background-color: ${color2};
display: flex;
flex-direction: column;
row-gap: 15px;
width:33.33%;
text-align: center;
@media(max-width: 800px) {
  width:100vw;
}
`

export const DivMyProjects2 = styled.div`
background-color: ${color4};
display: flex;
flex-direction: column;
row-gap: 15px;
width:33.33%;
text-align: center;
@media(max-width: 800px) {
  width:100vw;
}
`

export const DivMyProjects3 = styled.div`
background-color: ${color3};
display: flex;
flex-direction: column;
row-gap: 15px;
width:33.33%;
text-align: center;
@media(max-width: 800px) {
  width:100vw;
}
`


export const DivProjectTitle = styled.h2`
text-align: center;
`
export const DivProjectMext = styled.div`
font-size: 18px;
margin: auto;
text-align: left;
width: 80%;
@media(max-width: 800px) {
  width: 90%;
  padding-left: 15px; 
   padding-right: 15px;
}

`
export const DivProjectButtons = styled.div`
display: flex;
flex-direction: row;
column-gap: 20px;
margin: auto;
padding-bottom: 10px;
`

export const DivButtons = styled.button`
  background-color: ${color5};
  border-radius: 100px;
  color: ${color6};
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
:hover {
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
`



 

// Contact Me

export const DivContactMe = styled.div`
color:white;
background-color: ${color1};
display: flex;
flex-direction: column;
row-gap: 10px;
width:100vw;
`
export const DivContactMeTitle = styled.h2`
text-align: center;
`
export const DivContactMeText = styled.div`
font-size: 18px;
margin: auto;
width: 40vw;
@media(max-width: 800px) {
  width: 90%;
  padding-left: 15px; 
   padding-right: 15px;
}

`
export const DivContactMeLogos = styled.div`
display: flex;
flex-direction: row;
column-gap: 20px;
margin: auto;
padding-bottom:10px;
`


// Footer

export const Footer = styled.div`
background-color: ${color2};
display: flex;
flex-direction: row;
width:100vw;
color: ${color6};
font-size: 18px;
/* padding-left: 15px; */
`


export const FooterText = styled.div`
width:80vw;
color: ${color6};
font-size: 18px;
padding-left: 15px;
`







