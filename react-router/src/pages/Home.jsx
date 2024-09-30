import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Home</div>
      <Link to="/about">About 페이지로</Link>
    </>
  );
}

export default Home;
