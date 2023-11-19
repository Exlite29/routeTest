import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to={"/about"}>
        <h1>About</h1>
      </Link>
      <Link to={"/contact"}>
        <h1>Contact</h1>
      </Link>
      <Link to={"/profile"}>
        <h1>Profile</h1>
      </Link>
    </>
  );
}

export default Home;
