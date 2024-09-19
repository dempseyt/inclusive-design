import styled from "styled-components";

function Blind() {
  const StyledWrapper = styled.div`
    margin-left: 300px;
  `;

  return (
    <StyledWrapper>
      <div
        role="main"
        aria-labelledby="main-heading"
        style={{
          padding: "20px",
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#f9f9f9",
        }}
      >
        <header
          role="banner"
          aria-label="Primary Navigation"
          style={{ marginBottom: "20px" }}
        >
          <h1 id="main-heading" style={{ color: "#333" }}>
            Welcome to Our Accessible Site
          </h1>
          <nav aria-label="Main Navigation">
            <a
              href="#section1"
              style={{ marginRight: "15px", color: "#007BFF" }}
            >
              Section 1
            </a>
            <a
              href="#section2"
              style={{ marginRight: "15px", color: "#007BFF" }}
            >
              Section 2
            </a>
            <a href="#section3" style={{ color: "#007BFF" }}>
              Section 3
            </a>
          </nav>
        </header>

        <main>
          <section
            id="section1"
            aria-labelledby="section1-heading"
            style={{ marginBottom: "40px" }}
            role="region"
          >
            <h2 id="section1-heading" style={{ color: "#333" }}>
              Section 1: Introduction
            </h2>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              This is the first section of the page. It's designed to be fully
              accessible with screen reader support and audio descriptions.
            </p>
            <button
              aria-label="Learn more about Section 1"
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Learn More
            </button>
          </section>

          <section
            id="section2"
            aria-labelledby="section2-heading"
            style={{ marginBottom: "40px" }}
            role="region"
          >
            <h2 id="section2-heading" style={{ color: "#333" }}>
              Section 2: Features
            </h2>
            <ul
              style={{ color: "#555", lineHeight: "1.6" }}
              aria-label="List of Features"
            >
              <li>Feature 1: Visually appealing</li>
              <li>Feature 2: Fully tabbable</li>
              <li>Feature 3: Includes audio descriptions for accessibility</li>
            </ul>
            <button
              aria-label="Explore features in Section 2"
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Explore Features
            </button>
          </section>

          <section
            id="section3"
            aria-labelledby="section3-heading"
            role="region"
          >
            <h2 id="section3-heading" style={{ color: "#333" }}>
              Section 3: Conclusion
            </h2>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              This final section wraps up the content. The page is fully
              accessible, supporting screen readers and providing a better
              experience for blind users.
            </p>
            <button
              aria-label="Contact us for more information"
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Contact Us
            </button>
          </section>
        </main>
      </div>
    </StyledWrapper>
  );
}

export default Blind;
