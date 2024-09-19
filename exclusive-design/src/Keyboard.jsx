import styled from "styled-components";

function Keyboard() {
  const StyledWrapper = styled.div`
    margin-left: 300px;
  `;
  const StyledImg = styled.img`
    width: 400px;
  `;
  const StyledColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const WinningButton = styled.button`
    outline: none;
  `;
  return (
    <StyledWrapper>
      <div>
        <h1>Hope you have a mouse</h1>
        <p>
          Welcome here to the keyboard accessibility page, but of course the bad
          version.
        </p>
        <span></span>
        <div>
          <p>You have no mouse and one goal!</p>
          <p>Get to the I MADE IT BUTTON</p>
        </div>
        <form>
          <input type="text" placeholder="Ummmm" />
        </form>
        <StyledColumnDiv>
          <button tabIndex="-1">PRESS ME</button>
          <StyledImg src="./src/images/barney.webp" />
        </StyledColumnDiv>
      </div>
      <WinningButton onClick={() => console.log("Well Done")}>
        I MADE IT
      </WinningButton>
    </StyledWrapper>
  );
}

export default Keyboard;
