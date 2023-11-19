import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState();
  const [college, setCollege] = useState()
  const [location, setLocation] = useState()
  const [generate, setGenerate] = useState(false)

  function handleSubmit() {
    const nameElement = document.getElementById("name");
    const nameValue = nameElement.value;
    const cardNameElement = document.getElementById("cardName")
    cardNameElement.innerHTML = nameValue;

    const collegeNameValue = document.getElementById("college").value;
    document.getElementById("cardCollegeName").innerHTML = collegeNameValue;

    const locationValue = document.getElementById("location").value;
    document.getElementById("cardLocation").innerHTML = locationValue;

    document.getElementById("collegeCard").style.display = "block"
  }

  return (
    <div>
      <header className='navbar navbar-expand navbar-dark flex-column flex-md-row bs-navbar'>
        <div className='text-light w-100 h3 text-center'>ID card generator</div>
      </header>
      <div className="container d-flex">
        <div className='section-container col-6 p-4'>
          <div className='text-center font-weight-bold'>
            <h3>Input Form</h3>
          </div>
          <form onSubmit="return false" className=''>
            <div className='form-element py-3'>
              <label className='form-label'>Enter Name :</label>
              <input id='name' type="text" />
            </div>
            <div className='form-element py-3'>
              <label className='form-label'>Enter college name:</label>
              <input id='college' type="text" />
            </div>
            <div className='form-element py-3'>
              <label className='form-label'> Enter Location:</label>
              <input id='location' />
            </div>
            <button onClick={handleSubmit} type='button' className='btn generateButton'>Generate card</button>
          </form>
        </div>
        <div className='section-container col-6'>
          <div className='id-card-container' id='collegeCard'>
            <div className='text-center'>
              <h3>Generated Card</h3>
            </div>
            <div className='card-container'>
              <div className='card-wrapper'>
                <div className='user-card'>
                  <span className='user-photo'>
                    <i className='fa fa-user' />
                  </span>
                </div>
                <div className='general-information'>
                  <div className='card-element card-name'>
                    <span>Name:</span>
                    <span id='cardName'></span>
                  </div>
                  <div className='card-element college-name'>
                    <span>College Name:</span>
                    <span id='cardCollegeName'></span>
                  </div>
                  <div className='card-element college-name'>
                    <span>Location:</span>
                    <span id='cardLocation'></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
