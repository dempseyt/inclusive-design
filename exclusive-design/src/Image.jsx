import styled from "styled-components";

function Image() {
  const StyledWrapper = styled.div`
    background-color: darkblue;
    width: 100vw;
    margin-left: -10rem;
    gap: 10rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const StyledImg = styled.img`
    width: 300px;
  `;
  return (
    <StyledWrapper>
      <h1 style={{ color: "red" }}>Biggest Ever Betrayal</h1>
      <StyledImg src="./src/images/shifu.webp" />
      <StyledImg src="./src/images/tai-lung.webp" />
    </StyledWrapper>
  );
}

export default Image;
