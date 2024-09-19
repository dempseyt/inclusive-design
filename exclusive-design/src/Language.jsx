import { useState } from "react";
import styled from "styled-components";
const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Language() {
  const [isEnglish, setIsEnglish] = useState(false);

  const handleLanguageToggle = () => {
    setIsEnglish(!isEnglish);
  };
  return (
    <StyledWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h1 style={{ color: "#333", textAlign: "center" }}>
          {isEnglish ? "Welcome to Our Website" : "Bienvenue sur notre site"}
        </h1>

        <p style={{ color: "#555", lineHeight: "1.6", marginTop: "20px" }}>
          {isEnglish
            ? "This is a simple demonstration of how you can swap between languages. Being able to clearly switch languages is essential for a global audience."
            : "Ceci est une simple démonstration de la façon dont vous pouvez passer d'une langue à une autre. Il est essentiel de pouvoir changer de langue clairement pour un public mondial."}
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <button
            onClick={handleLanguageToggle}
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
            {isEnglish ? "Useless Button One" : "Bouton inutile Une"}
          </button>
          <button
            onClick={handleLanguageToggle}
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
            {isEnglish ? "Switch to French" : "Passer au Anglaise"}
          </button>
          <button
            onClick={handleLanguageToggle}
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
            {isEnglish ? "Useless Button 2" : "Bouton inutile Deux"}
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default Language;
