import React from "react";
import Navbar from "./components/Navbar";
import Index from "./components/MyButtons";

function App() {
  return (
    <>
      <div style={{ backgroundColor: " #C0C0C0" }}>
        <Navbar />
        <div style={{ padding: "4px" }}>
          <Index style={{ padding: "4px" }} />
        </div>
      </div>
    </>
  );
}

export default App;
