import React from "react";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="container">
      <h1>Welcome to the JSX Fix Challenge</h1>
      <label htmlFor="nameInput">Name:</label>
      <input id="nameInput" type="text" />
      <button onClick={handleClick} disabled={false}>
        Click Me
      </button>
      <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
        Styled Div
      </div>
    </div>
  );
}

export default App;
