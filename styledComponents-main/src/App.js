import "./App.css";
import styled from "styled-components";
import ImpBtn from "./Buttons";
import React from "react";
function App() {
  const Button = styled.button`
    background: ${props => (props.alertcolor ? "red" : "cyan")};
    /* ternary expression */
    font-size: 35px;
    padding: 10px;
    display: block;
    margin: 10px auto;
    width: 200px;
    border-radius: 5px;
    &.alertcolor {
      background: lime;
    }
  `; /* or just adding another class will overwrite the settings */

  const BlackButton = styled(Button)`
    background: black;
    color: ${props => props.color || "white"};
  `;
  return (
    <div className="App">
      <Button>click me</Button>
      <Button className="alertcolor">danger</Button>
      <Button alertcolor>danger</Button>
      <BlackButton alertcolor>danger</BlackButton>
      <BlackButton color="gold">danger</BlackButton>
      <ImpBtn />
      This below will not work <br/> not even you delete the text in the component
      <ImpBtn >Imported Text</ImpBtn>
    </div>
  );
}

export default App;
