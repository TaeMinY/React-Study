import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const onHomePage = () => {
    navigate("/home");
  };

  return (
    <>
      <div>About</div>
      <div onClick={onHomePage}>Home 페이지로</div>
    </>
  );
}

export default About;
