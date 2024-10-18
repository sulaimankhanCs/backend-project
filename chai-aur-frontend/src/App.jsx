import { useState, useEffect } from 'react';  // Correctly import useEffect
import axios from 'axios';  // Import axios
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/states')  // Replace '/api' with your actual API endpoint
      .then(response => {
        setData(response.data);  // Handle the response data
      })
      .catch(error => {
        setError(error);  // Handle any errors
        console.error('There was an error fetching the data:', error);
      });
  }, []);  // Add the empty dependency array to run this effect only once

  return (
    <>
      <h1>chai aur frontend</h1>

      {error ? <p>Error: {error.message}</p> : null}

      {Array.isArray(data) && data.map((item, index) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <h2>{item.description}</h2>
        </div>
      ))}
    </>
  );
}

export default App;
