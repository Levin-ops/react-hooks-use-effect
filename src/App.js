import React, { useState, useEffect } from "react";

function App() {

  let [count, setCount] = useState(0);
  let [text, setText] = useState("");


  useEffect(() =>{
    document.title = text;
  },
  [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000)
  }, [])

  console.log("Component rendering");

  return (
  <div>
    <button onClick={() => setCount((count) = count + 1)}>
      I have been clicked {count} times
    </button>

    <input
      type="text"
      placeholder="Type away..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />

  </div>
    
    )
}

export default App;
