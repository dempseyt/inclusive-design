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
          padding: "8rem",
          border: "3px solid black",
          borderRadius: "40px",
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h1 style={{ color: "#333", textAlign: "center" }}>
          Colorful and Accessible Design
        </h1>

        <div style={{ marginTop: "30px" }}>
          <h2 style={{ color: "#333" }}>Diverse Status Indicators</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                padding: "20px",
                backgroundColor: "#FF4500",
                color: "#FFFFFF",
                textAlign: "center",
                borderRadius: "8px",
                width: "18%",
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxcHgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzFweCcgaGVpZ2h0PScxcHgnIGZpbGw9J3doaXRlJy8+PC9zdmc+')",
                backgroundSize: "5px 5px",
              }}
            >
              <strong>Error</strong> <span aria-hidden="true">⚠️</span>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#32CD32",
                color: "#FFFFFF",
                textAlign: "center",
                borderRadius: "8px",
                width: "18%",
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxcHgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzFweCcgaGVpZ2h0PScxcHgnIGZpbGw9J3doaXRlJy8+PC9zdmc+')",
                backgroundSize: "5px 5px",
              }}
            >
              <strong>Success</strong> <span aria-hidden="true">✔️</span>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#1E90FF",
                color: "#FFFFFF",
                textAlign: "center",
                borderRadius: "8px",
                width: "18%",
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxcHgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzFweCcgaGVpZ2h0PScxcHgnIGZpbGw9J3doaXRlJy8+PC9zdmc+')", // Adding waves
                backgroundSize: "5px 5px",
              }}
            >
              <strong>Info</strong> <span aria-hidden="true">ℹ️</span>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#FFD700",
                color: "#333333",
                textAlign: "center",
                borderRadius: "8px",
                width: "18%",
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxcHgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzFweCcgaGVpZ2h0PScxcHgnIGZpbGw9J3doaXRlJy8+PC9zdmc+')",
                backgroundSize: "5px 5px",
              }}
            >
              <strong>Warning</strong> <span aria-hidden="true">⚡</span>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#9400D3",
                color: "#FFFFFF",
                textAlign: "center",
                borderRadius: "8px",
                width: "18%",
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxcHgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzFweCcgaGVpZ2h0PScxcHgnIGZpbGw9J3doaXRlJy8+PC9zdmc+')",
                backgroundSize: "5px 5px",
              }}
            >
              <strong>Alert</strong> <span aria-hidden="true">🚨</span>
            </div>
          </div>
          <p style={{ marginTop: "20px", color: "#333" }}>
            These status indicators use a variety of colors, patterns, and
            symbols, making them accessible and easy to differentiate for all
            users, including those with color blindness.
          </p>
        </div>

        <div style={{ marginTop: "30px" }}>
          <h2 style={{ color: "#333" }}>Colorful Data Visualization</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                padding: "20px",
                backgroundColor: "#FF6347",
                textAlign: "center",
                borderRadius: "8px",
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxcHgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzFweCcgaGVpZ2h0PScxcHgnIGZpbGw9J3doaXRlJy8+PC9zdmc=')",
                backgroundSize: "5px 5px",
              }}
            >
              <strong>Segment 1</strong> <span aria-hidden="true">🟥</span>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#32CD32",
                textAlign: "center",
                borderRadius: "8px",
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxcHgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzFweCcgaGVpZ2h0PScxcHgnIGZpbGw9J3doaXRlJy8+PC9zdmc=')",
                backgroundSize: "5px 5px",
              }}
            >
              <strong>Segment 2</strong> <span aria-hidden="true">🟩</span>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#1E90FF",
                textAlign: "center",
                borderRadius: "8px",
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxcHgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzFweCcgaGVpZ2h0PScxcHgnIGZpbGw9J3doaXRlJy8+PC9zdmc=')",
                backgroundSize: "5px 5px",
              }}
            >
              <strong>Segment 3</strong> <span aria-hidden="true">🟦</span>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#FFD700",
                textAlign: "center",
                borderRadius: "8px",
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxcHgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzFweCcgaGVpZ2h0PScxcHgnIGZpbGw9J3doaXRlJy8+PC9zdmc=')",
                backgroundSize: "5px 5px",
              }}
            >
              <strong>Segment 4</strong> <span aria-hidden="true">🟨</span>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#9400D3",
                textAlign: "center",
                borderRadius: "8px",
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxcHgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzFweCcgaGVpZ2h0PScxcHgnIGZpbGw9J3doaXRlJy8+PC9zdmc=')",
                backgroundSize: "5px 5px",
              }}
            >
              <strong>Segment 5</strong> <span aria-hidden="true">🟪</span>
            </div>
          </div>
          <p style={{ marginTop: "20px", color: "#333" }}>
            This data visualization uses a variety of colors, patterns, and
            symbols to differentiate between segments, ensuring accessibility
            for users with color blindness.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default Colours;
