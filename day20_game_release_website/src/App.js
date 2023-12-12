import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Carausel } from './components/Carausel';
import { Container } from './Layout';
import GameCard from './components/GameCard';

function App() {
  const latestRelease = [
    "/images/mario.jpg",
    "/images/game2.png"
  ];

  const game = [
    {
      title: "Game 1",
      releaseDate: "2023-01-01",
      imageUrl: "/images/mario.jpg",
      features: [
        "Immersive Storyline",
        "Multiplayer Mode",
        "High-Quality Graphics"
      ],
      price: 49.99,
      consoleVersions: ["PS5", "Xbox Series X", "PC"]
    },
    {
      title: "Game 2",
      releaseDate: "2023-02-15",
      imageUrl: "/images/game2.png",
      features: [
        "Open World Exploration",
        "Co-op Gameplay",
        "Dynamic Environments"
      ],
      price: 59.99,
      consoleVersions: ["PS4", "Xbox One", "PC"]
    }
  ];
  return (
    <>
      <Header />
      <Container>
        <Carausel image={latestRelease} />
        <h1>Upcoming Game Release</h1>
        {game.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </Container>
    </>
  );
}

export default App;
