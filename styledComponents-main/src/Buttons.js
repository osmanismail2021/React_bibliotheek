import "./App.css";
import styled from "styled-components";
function Buttons() {
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
    background: darkgray;
    color: ${props => props.color || "white"};
  `;
  return (
    <div className="App">
      {/* <Button>click me</Button>
      <Button className="alertcolor">danger</Button>
      <Button alertcolor>danger</Button>
      <BlackButton alertcolor>danger</BlackButton> */}
      <BlackButton color="gold">imported</BlackButton>
    </div>
  );
}

export default Buttons;
