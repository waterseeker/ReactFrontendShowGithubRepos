import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { Issue } from './Issue'

function App() {
    const [data, setData] = useState<any>()
    const getData = () => {
        axios.get(`https://api.github.com/repos/microsoft/TypeScript/issues`)
        .then(response => {
            console.log(response)
            setData(response)
        })
    }
    useEffect(() => {getData()}, [])
  return (
      <div>
        <h1>{data}</h1>
      </div>
  );
}

export default App;
