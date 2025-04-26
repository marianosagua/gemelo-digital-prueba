import { useState } from "react";
import "./App.css";

function App() {
  const [ledOn, setLedOn] = useState(false);

  const handleMouseDown = () => {
    setLedOn(true);
  };

  const handleMouseUp = () => {
    setLedOn(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "4rem",
        gap: 32,
      }}
    >
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        style={{ fontSize: "1.5rem", padding: "1rem 2rem" }}
      >
        Encender
      </button>
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: ledOn ? "red" : "#444",
          boxShadow: ledOn ? "0 0 24px 8px red" : "none",
          transition: "background 0.2s, box-shadow 0.2s",
        }}
        aria-label={ledOn ? "LED encendido" : "LED apagado"}
      />
    </div>
  );
}

export default App;
