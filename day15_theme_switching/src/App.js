import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './context/ThemeContext';
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeToggle from './components/ThemeToggle';

function App() {
  const { darkTheme } = useContext(ThemeContext)
  return (
    <div className={`App ${darkTheme ? "dark-theme" : "light-theme"}`}>
      <header className='App-header'>
        <h1>Theme Switching App</h1>
        <ThemeToggle />
      </header>
      <div className="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis
        ut orci nec sodales. Donec dignissim tortor eget metus mollis, vel
        gravida lectus accumsan. Vestibulum dapibus tortor in massa lacinia
        tempus. Morbi et dolor et ipsum eleifend viverra in a erat. Nam vel
        rhoncus urna, eu finibus justo. Nunc sodales lacinia turpis, vitae
        viverra erat rutrum eget. Phasellus dapibus imperdiet odio, consectetur
        rutrum velit pharetra elementum. Aliquam tempor mauris nec consequat
        cursus. Nullam mi libero, sodales ut ornare at, lobortis ut metus. Cras
        quis ex non odio vehicula elementum et in magna. Phasellus eget
        ullamcorper orci. Duis in massa accumsan, vehicula arcu sit amet,
        pulvinar mi. Cras massa lorem, facilisis a arcu eu, mollis convallis
        urna. Aliquam semper tristique nunc vel placerat. Etiam nec magna ex{" "}
      </div>
    </div>
  );
}

export default App;
