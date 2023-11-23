import logo from './logo.svg';
import './App.css';
import axios from 'axios';

//after my try
import UserList from "./components/UserList";
import Header from "./components/Header";
import { useEffect, useState } from 'react';


axios.baseUrl = 'https://randomuser.me/api/?results=50';

function App() {

  const [data, updateData] = useState([]);
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50")
      .then((res) => {
        const data = res.data.results;
        updateData(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <div className="App">
      <Header title={"UserList"} />
      <div className='row d-flex justify-content-center'>
        {data.map((item, index) => (
          <UserList key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
