import style from 'styled-components';

const Text = style.div`
font-family: Helvetica,sans-serif;
font-weight: bolder;
font-size: 26px;
padding-left:17px;
padding-right:17px;
padding-top:15px;
word-wrap: break-word;`;

const TitleText = style.div`
font-family: Helvetica,sans-serif;
font-weight: bolder;
font-size: 50px;
padding-left:17px;
padding-right:17px;
padding-top:15px;
word-wrap: break-word;`;

const CardContainer = style.div`
margin-left:10%;`;

const Prompt = style.div`
width: 2.5in;
height: 4in;
float: left;
margin: 10px;
border-radius: .25in;
border: 3px solid white;
color: white;
background: black;`;

const Response = style.div`
width: 2.5in;
height: 4in;
float: left;
margin: 10px;
border-radius: .25in;
border: 3px solid black;
color: black;
background: #fafafa;`;

export {Prompt, Response, CardContainer, Text, TitleText};