import styled, { css } from "styled-components";
import IntroImage from "../assets/images/intro.svg";
import { useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SignUpTitle = styled.div`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
`;

function SignUp() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [username, setUsername] = useState("");

  return (
    <SignUpContainer>
      <img src={IntroImage} alt="" />
      <SignUpTitle>회원가입</SignUpTitle>
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
          margin-bottom: 4px;
        `}
      ></Input>
      <Input
        value={passwordCheck}
        type="password"
        onChange={(e) => {
          setPasswordCheck(e.target.value);
        }}
        placeholder="비밀번호 확인"
        style={css`
          margin-bottom: 4px;
        `}
      ></Input>
      <Input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="유저 이름"
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
        회원가입
      </Button>
      <Button
        onClick={() => {
          navigate(-1);
        }}
        type="main-reversal"
      >
        뒤로가기
      </Button>
    </SignUpContainer>
  );
}

export default SignUp;
