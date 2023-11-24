import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
function App() {
  const [photoGalleryArray, updatePhotoGalleryArray] = useState([])
  useEffect(() => {
    axios.get('https://picsum.photos/v2/list')
      .then(res => {
        updatePhotoGalleryArray(res.data)
      }).catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div className="App">
      <nav className='navbar navbar-dark bg-dark'>
        <div className='w-100 text-light'>Image Gallery</div>
      </nav>
      <div className='row'>
        {
          photoGalleryArray.map((item, index) => {
            return (
              <div key={index} className='col-lg-4 col-md-4 col-sm-12 p-1'>
                <img src={item.download_url} alt={`image_${item.id}`} height="300" width="400" />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
