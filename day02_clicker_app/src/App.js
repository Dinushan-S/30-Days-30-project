import { useState } from 'react';
import Header from './component/Header';
import Clicker from './component/Clicker';
import './App.css';

function App() {
  const [title] = useState("Clicker")
  return (
    <div className="App">
      <Header title={title} />
      <Clicker />
    </div>
  );
}

export default App;
