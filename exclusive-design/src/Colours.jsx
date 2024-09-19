import styled from "styled-components";

function Colours() {
  const StyledWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <StyledWrapper>
      <div
        style={{
          padding: "20px",
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
        }}
      >
        <h1 style={{ color: "#333", textAlign: "center" }}>
          Color Contrast Example (Bad)
        </h1>

        <div style={{ marginTop: "30px" }}>
          <h2 style={{ color: "#333" }}>Important Status Indicators</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                padding: "20px",
                backgroundColor: "#FF0000",
                color: "#FFFFFF",
                textAlign: "center",
                borderRadius: "8px",
                width: "45%",
              }}
            >
              Error
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#00FF00",
                color: "#FFFFFF",
                textAlign: "center",
                borderRadius: "8px",
                width: "45%",
              }}
            >
              Success
            </div>
          </div>
          <p style={{ marginTop: "20px", color: "#333" }}>
            These two colors (red and green) are commonly used to indicate
            errors and success. However, they can be difficult to differentiate
            for users with red-green color blindness.
          </p>
        </div>

        <div style={{ marginTop: "30px" }}>
          <h2 style={{ color: "#333" }}>Comparison Chart</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                padding: "20px",
                backgroundColor: "#FFCC00",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              Category 1
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#CC0000",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              Category 2
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#00CC00",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              Category 3
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#0000CC",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              Category 4
            </div>
          </div>
          <p style={{ marginTop: "20px", color: "#333" }}>
            This chart uses colors that can be hard to distinguish for users
            with various types of color blindness, especially when there is no
            additional labeling.
          </p>
          <h3 style={{ color: "#333" }}>
            IT IS IMPORTANT TO HAVE LABELS AND NOT JUST RELY COLORS
          </h3>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default Colours;
