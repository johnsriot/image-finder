import React from "react";
//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Search />
    </div>
  );
}

export default App;
