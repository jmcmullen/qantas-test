import React from "react";
import useFetch from "use-http";

import "./App.css";

function App() {
  const { loading, error, data = [] } = useFetch("/data.json", {}, []);

  return (
    <div className="App">
      {error && "Error!"}
      {loading && "Loading..."}
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
