import { useState, useEffect } from "react";

function App() {
  // ✅ update the initial state for text to read a value using localStorage.getItem("text")
  const [text, setText] = useState(localStorage.getItem("textInput1") || "");
  const [count, setCount] = useState(localStorage.getItem("count1") || 0);

  useEffect(() => {
    // ✅ when the side effect runs, use localStorage.setItem("text", value) to save the text to localStorage
    console.log("Running side effect");
    localStorage.setItem('textInput1', text)
  }, [text]);
  // ✅ use the dependencies array so that the side effect only runs if the text changes

  useEffect(() => {
    // ✅ when the side effect runs, use localStorage.setItem("text", value) to save the text to localStorage
    console.log("Running side effect");
    localStorage.setItem('count1', count)
  }, [count]);

  console.log("Rendering component");

  return (
    <div>
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <button onClick={() => setCount(count => count + 1)}>{count}</button>
    </div>
  );
}

export default App;
