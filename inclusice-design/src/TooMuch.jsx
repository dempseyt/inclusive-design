import styled from "styled-components";

function TooMuch() {
  const StyledWrapper = styled.div`
    margin-left: 300px;
  `;
  return (
    <StyledWrapper>
      <div
        style={{
          padding: "20px",
          width: "1500px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          paddingRight: "1rem",
        }}
      >
        <header>
          <h1 style={{ color: "#333", textAlign: "center" }}>
            Welcome to Our Website
          </h1>
          <nav style={{ textAlign: "center", margin: "20px 0" }}>
            <a
              href="#main-content"
              style={{ marginRight: "15px", color: "#007BFF" }}
            >
              Home
            </a>
            <a href="#about" style={{ marginRight: "15px", color: "#007BFF" }}>
              About
            </a>
            <a href="#contact" style={{ color: "#007BFF" }}>
              Contact
            </a>
          </nav>
          <a
            href="#main-content"
            className="skip-link"
            style={{
              position: "absolute",
              top: "-40px",
              left: "10px",
              padding: "8px",
              backgroundColor: "#007BFF",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            Skip to main content
          </a>
        </header>

        <main id="main-content" style={{ marginTop: "20px" }}>
          <section>
            <h2 style={{ color: "#333" }}>About Us</h2>
            <p style={{ lineHeight: "1.6", color: "#555" }}>
              We are committed to providing an inclusive and accessible
              experience for all our users. Our website is designed with
              simplicity in mind, ensuring that it is easy to navigate and
              understand for everyone, including those using assistive
              technologies.
            </p>
          </section>

          <section style={{ marginTop: "30px" }}>
            <h2 style={{ color: "#333" }}>Our Services</h2>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <div
                style={{
                  flex: "1",
                  minWidth: "250px",
                  padding: "20px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                }}
              >
                <h3 style={{ color: "#007BFF" }}>Service 1</h3>
                <p style={{ color: "#555" }}>
                  We provide top-notch services to help you succeed.
                </p>
              </div>
              <div
                style={{
                  flex: "1",
                  minWidth: "250px",
                  padding: "20px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                }}
              >
                <h3 style={{ color: "#007BFF" }}>Service 2</h3>
                <p style={{ color: "#555" }}>
                  Our team is dedicated to delivering the best results.
                </p>
              </div>
            </div>
          </section>

          <section id="contact" style={{ marginTop: "30px" }}>
            <h2 style={{ color: "#333" }}>Contact Us</h2>
            <form style={{ marginTop: "20px" }}>
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    color: "#555",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  style={{
                    width: "80%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    color: "#555",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  style={{
                    width: "80%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Submit
              </button>
            </form>
          </section>
        </main>

        <footer
          style={{ marginTop: "40px", textAlign: "center", color: "#777" }}
        >
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </StyledWrapper>
  );
}

export default TooMuch;
