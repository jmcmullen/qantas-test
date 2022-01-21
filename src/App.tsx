import React from "react";
import useFetch from "use-http";
import styled from "@emotion/styled";

import QantasLogo from "./assets/images/qantas-logo.png";
import List from "./components/List";

function App() {
  const { loading, error, data = [] } = useFetch("/data.json", {}, []);

  return (
    <Container>
      <Logo src={QantasLogo} alt="Qantas" />
      {loading && <p>Loading...</p>}
      {error && <p>An error has occured, please try again later.</p>}
      {data && data.results && <List items={data.results} />}
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem auto;
  max-width: 48rem;
  width: 100%;
`;

const Logo = styled.img`
  width: 9rem;
`;

export default App;
