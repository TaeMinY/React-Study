import styled, { css } from "styled-components";
import IntroImage from "../assets/images/intro.svg";
import { useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

const SignInContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SignInTitle = styled.div`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
`;

const SignInText = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

function SignIn() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SignInContainer>
      <img src={IntroImage} alt="" />
      <SignInTitle>로그인</SignInTitle>
      <SignInText>나만의 영어 단어장을 만들어보세요!</SignInText>
      <Input
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
        placeholder="아이디"
        style={css`
          margin-bottom: 4px;
          margin-top: 8px;
        `}
      ></Input>
      <Input
        value={password}
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="비밀번호"
        style={css`
          margin-bottom: 24px;
        `}
      ></Input>
      <Button
        onClick={() => {
          navigate("/");
        }}
        type="main"
        style={css`
          margin-bottom: 4px;
        `}
      >
        로그인
      </Button>
      <Button
        onClick={() => {
          navigate("/signup");
        }}
        type="main-reversal"
      >
        회원가입
      </Button>
    </SignInContainer>
  );
}

export default SignIn;
