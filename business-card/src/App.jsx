import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styled, { createGlobalStyle } from "styled-components";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/Input";
import logoImage from "./assets/react.webp";
import BusinessContentItem from "./components/BusinessContentItem";

const GlobalStyle = createGlobalStyle`
   body{
    display:block !important;
   }
`;

const BusinessCard = styled.div`
  margin-top: 40px;

  width: 212px;
  height: 382px;

  padding: 20px;

  background-color: #ffffff;
  box-shadow: 0px 4px 15px 2px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const BusinessCardUsernName = styled.div`
  color: #000000;

  font-size: 20px;
  font-weight: 700;
  line-height: 1;
`;

const BusinessCardEnglishUsernName = styled.div`
  color: #000000;

  font-size: 14px;
  font-weight: 500;

  margin-left: 6px;
`;

const BusinessCardIntroText = styled.div`
  color: #000000;

  font-size: 14px;
  font-weight: 500;

  margin-top: 8px;

  text-align: left;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;

  margin: 0 auto;
`;

const BusinessContentContainer = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 20px;
`;

function App() {
  const [username, setUsername] = useState("");
  const [englishUsername, setEnglishUsername] = useState("");
  const [introText, setIntroText] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [webUrl, setWebUrl] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="이름"
      ></Input>
      <Input
        value={englishUsername}
        onChange={(e) => {
          setEnglishUsername(e.target.value);
        }}
        placeholder="영어 이름"
      ></Input>
      <Input
        value={introText}
        onChange={(e) => {
          setIntroText(e.target.value);
        }}
        placeholder="소개"
      ></Input>
      <Input
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
        placeholder="전화번호"
      ></Input>
      <Input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="이메일"
      ></Input>
      <Input
        value={github}
        onChange={(e) => {
          setGithub(e.target.value);
        }}
        placeholder="깃헙"
      ></Input>
      <Input
        value={webUrl}
        onChange={(e) => {
          setWebUrl(e.target.value);
        }}
        placeholder="웹 홈페이지"
      ></Input>
      <BusinessCard>
        <div>
          <Row>
            <BusinessCardUsernName>{username}</BusinessCardUsernName>
            <BusinessCardEnglishUsernName>
              {englishUsername}
            </BusinessCardEnglishUsernName>
          </Row>
          <BusinessCardIntroText>{introText}</BusinessCardIntroText>
        </div>
        <Image src={logoImage}></Image>

        <BusinessContentContainer>
          <BusinessContentItem
            type="TEL"
            text={phoneNumber}
          ></BusinessContentItem>
          <BusinessContentItem type="E-mail" text={email}></BusinessContentItem>
          <BusinessContentItem
            type="Github"
            text={github}
          ></BusinessContentItem>
          <BusinessContentItem text={webUrl}></BusinessContentItem>
        </BusinessContentContainer>
      </BusinessCard>
    </>
  );
}

export default App;
