import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";
import Blind from "./Blind";
import Colours from "./Colours";
import Image from "./Image";
import Keyboard from "./Keyboard";
import Language from "./Language";
import TooMuch from "./TooMuch";

function App() {
  const StyledNavBar = styled.div`
    display: flex;
    flex-direction: column;
    max-width: fit-content;
    gap: 1rem;
    padding: 1rem;
    background-color: black;
    position: fixed;
    height: 100vh;
  `;

  return (
    <>
      <StyledNavBar>
        <a href="/keyboard">Goodluck using a keyboard</a>
        <a href="/too-much">What is going on?</a>
        <a href="/colours">COLOURS!</a>
        <a href="/language">Le Bosh?</a>
        <a href="/blind">Blind? Tough</a>
        <a href="/image">Image City</a>
      </StyledNavBar>

      <Router>
        <Routes>
          <Route exact path="/keyboard" element={<Keyboard />} />
          <Route exact path="/too-much" element={<TooMuch />} />
          <Route exact path="/colours" element={<Colours />} />
          <Route exact path="/language" element={<Language />} />
          <Route exact path="/blind" element={<Blind />} />
          <Route exact path="/image" element={<Image />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
