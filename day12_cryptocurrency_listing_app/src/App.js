import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { CryptoCurrencyInfo } from './components/CryptoCurrencyInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <CryptoCurrencyInfo />
    </div>
  );
}

export default App;
