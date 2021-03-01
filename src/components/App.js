import React, { useState } from "react";
import logo from "../logo.svg";
import "./App.css";
import SignIn from "./SignIn";
import Main from "./Main";

function App() {
  const [name, setName] = useState("");
  console.log({ name });

  if (name === "") {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
}

export default App;
