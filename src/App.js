import React, { useEffect,useState,useRef } from 'react';

function CountMyRenders() {
  const countRenderRef = useRef(1);
  
  useEffect(function afterRender() {
    countRenderRef.current++;
  });

  return (
    <div>I've rendered {countRenderRef.current} times</div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CountMyRenders />
      <button onClick={() => setCount(count => count + 1)}>
        Click to re-render
      </button>
    </div>
  );
}
export default App;