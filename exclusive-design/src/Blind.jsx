import styled from "styled-components";

function Blind() {
  const StyledWrapper = styled.div`
    margin-left: 300px;
  `;
  return (
    <StyledWrapper>
      <div
        style={{
          padding: "20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Welcome to Our Site
        </div>

        <div>
          <div style={{ marginBottom: "40px" }}>
            <div style={{ fontSize: "20px", marginBottom: "10px" }}>
              Intro Section
            </div>
            <div style={{ color: "#555" }}>
              This is the first section. Unfortunately, it is designed poorly
              for screen readers because it's missing proper semantic HTML tags.
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <div style={{ fontSize: "20px", marginBottom: "10px" }}>
              Features Section
            </div>
            <ul style={{ color: "#555", listStyleType: "none" }}>
              <li style={{ marginBottom: "5px" }}>
                <span style={{ fontWeight: "bold" }}>1.</span> Visual design
              </li>
              <li style={{ marginBottom: "5px" }}>
                <span style={{ fontWeight: "bold" }}>2.</span> Keyboard
                navigation
              </li>
              <li style={{ marginBottom: "5px" }}>
                <span style={{ fontWeight: "bold" }}>3.</span> Missing audio
                descriptions
              </li>
            </ul>
          </div>

          <div>
            <div style={{ fontSize: "20px", marginBottom: "10px" }}>
              Conclusion Section
            </div>
            <div style={{ color: "#555" }}>
              This final section wraps up the content, but screen readers may
              struggle to interpret this page due to poor design practices.
            </div>
          </div>

          <button
            onClick={() => alert("This button does nothing important!")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Click Me
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default Blind;
