import './App.css';
import Select from 'react-select';
import { useEffect, useState } from 'react';

function App() {
  const [barries, setBarries] = useState([])

  const getDataBarries = async () => {
    const request = await fetch('https://pokeapi.co/api/v2/berry/')
    const response = await request.json()
    const data = response.results.map(item => {
      return {
        label: item.name,
        value: item.url
      }
    })
    setBarries(data)
  }

  useEffect(() => {
    getDataBarries()
  }, [])
  

  const handleOnChanged = async (url) => {
    const request = await fetch(url)
    const response = await request.json()
    console.log(response)
  }

  return (
    <div className="App">
      <Select options={barries} onChange={(e)=> handleOnChanged(e.value)}/>
    </div>
  );
}

export default App;
