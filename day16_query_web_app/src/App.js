import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
}

function App() {
  const { data, isLoading, error } = useQuery("todos", fetchData)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error : {error.message}</div>
  return (
    <div>
      <Header title="React Query" />
      <div className='container mt-5'>
        <h1>React Query App</h1>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Data from JSONPlaceholder API</h5>
            <p className='card-text'>{JSON.stringify(data)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
