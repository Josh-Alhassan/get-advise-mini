import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => + 1)
  }

  useEffect(function() {
    getAdvice();
  }, []);

  return (
    <div className='get-advice-wrapper'>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>You have read <strong>{props.count}</strong> pieces of advice</p>
  )
}

export default App;
