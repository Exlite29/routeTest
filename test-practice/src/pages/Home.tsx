import React, { ReactNode } from "react";

interface IsProps {
  children: ReactNode;
}

const Home: React.FC<IsProps> = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
