import styled from "styled-components";

function Keyboard() {
  const StyledWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const StyledImg = styled.img`
    width: 400px;
  `;
  const StyledColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `;

  return (
    <StyledWrapper>
      <div>
        <h1>Mouse or Keyboard... do not care</h1>
        <p>
          Welcome here to the keyboard accessibility page, but of course the
          good version. You have no mouse and one goal! Get to the I MADE IT
          BUTTON
        </p>
        <div></div>
        <form>
          <input type="text" placeholder="Ummmm" />
        </form>
        <StyledColumnDiv>
          <button>PRESS ME</button>
          <StyledImg src="./src/images/barney.webp" />
          <button
            onClick={() => console.log("Well Done")}
            style={{ width: "fit-content" }}
          >
            I MADE IT
          </button>
        </StyledColumnDiv>
      </div>
    </StyledWrapper>
  );
}

export default Keyboard;
