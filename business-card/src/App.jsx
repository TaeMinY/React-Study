import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/Input";

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
      {username}
      <br />
      {englishUsername}
    </>
  );
}

export default App;
