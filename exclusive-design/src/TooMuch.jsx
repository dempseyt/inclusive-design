import styled from "styled-components";

function TooMuch() {
  const StyledWrapper = styled.div`
    margin-left: 300px;
  `;
  return (
    <StyledWrapper>
      <div style={{ padding: "20px", backgroundColor: "white" }}>
        <h1
          style={{
            color: "red",
            textAlign: "center",
            animation: "blink 1s infinite",
          }}
        >
          Welcome to the Most Overwhelming Page Ever!
        </h1>
        <marquee style={{ fontSize: "24px", color: "blue" }}>
          This is an endless scrolling text to distract you!
        </marquee>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              flex: "1",
              backgroundColor: "yellow",
              padding: "15px",
              fontSize: "18px",
            }}
          >
            Click Me!
          </button>
          <button
            style={{
              flex: "1",
              backgroundColor: "orange",
              padding: "15px",
              fontSize: "18px",
            }}
          >
            No, Click Me!
          </button>
          <button
            style={{
              flex: "1",
              backgroundColor: "green",
              padding: "15px",
              fontSize: "18px",
            }}
          >
            I am the Best Button!
          </button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <img
            src="./src/images/shrek.png"
            alt="Random Image"
            style={{ margin: "10px", borderRadius: "50%", width: "300px" }}
          />
          <img
            src="./src/images/ironman.png"
            alt="Another Random Image"
            style={{ margin: "10px", borderRadius: "50%", width: "300px" }}
          />
          <img
            src="./src/images/sass.png"
            alt="Yet Another Random Image"
            style={{ margin: "10px", borderRadius: "50%", width: "300px" }}
          />
        </div>

        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
          }}
        >
          <div style={{ backgroundColor: "pink", padding: "10px" }}>
            Content Box 1
          </div>
          <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
            Content Box 2
          </div>
          <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
            Content Box 3
          </div>
          <div style={{ backgroundColor: "lavender", padding: "10px" }}>
            Content Box 4
          </div>
          <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
            Content Box 5
          </div>
          <div style={{ backgroundColor: "lightsalmon", padding: "10px" }}>
            Content Box 6
          </div>
        </div>

        <div
          style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}
        >
          <p style={{ color: "purple" }}>This is an important message!</p>
          <p
            style={{
              color: "brown",
              fontSize: "18px",
              textTransform: "uppercase",
            }}
          >
            Another important message!
          </p>
          <p style={{ color: "darkred", textDecoration: "underline" }}>
            And yet another important message!
          </p>
        </div>

        <form
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <label>
            Name:
            <input
              type="text"
              name="name"
              style={{ width: "100%", padding: "10px", borderColor: "black" }}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              style={{ width: "100%", padding: "10px", borderColor: "black" }}
            />
          </label>
          <button
            type="submit"
            style={{ padding: "15px", backgroundColor: "red", color: "white" }}
          >
            Submit
          </button>
        </form>

        <footer
          style={{ marginTop: "30px", textAlign: "center", fontSize: "14px" }}
        >
          <p style={{ color: "gray" }}>
            Thank you for visiting the most overwhelming page!
          </p>
        </footer>

        <style>
          {`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
          }
          `}
        </style>
      </div>
    </StyledWrapper>
  );
}

export default TooMuch;
