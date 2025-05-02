import React, { useState } from 'react';
import { generateEntropy, compareEntropy } from './entropy';

function App() {
  const [clientA, setClientA] = useState([]);
  const [clientB, setClientB] = useState([]);
  const [match, setMatch] = useState(false);

  const syncEntropy = () => {
    const entropyA = generateEntropy(42);
    const entropyB = generateEntropy(42);
    setClientA(entropyA);
    setClientB(entropyB);
    setMatch(compareEntropy(entropyA, entropyB));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Pseudo Quantum Entropy Sync</h2>
      <button onClick={syncEntropy}>Generate and Compare</button>
      <p>Entropy Match: {match ? "YES" : "NO"}</p>
      <pre>A: {JSON.stringify(clientA)}</pre>
      <pre>B: {JSON.stringify(clientB)}</pre>
    </div>
  );
}

export default App;