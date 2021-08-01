import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { Issue } from './Issue'
import mockData from './mockData'

function App() {
    const [data, setData] = useState<Issue[]>([])
    // const getData = () => {
    //     axios.get(`https://api.github.com/repos/microsoft/TypeScript/issues`)
    //     .then(response => {
    //         console.log(response)
    //         setData(response)
    //     })
        
    // }
    const getData = () => mockData
    let filtered_data = getData().filter(entry => !Boolean(entry.pull_request))
    console.log(filtered_data)
    useEffect(() => {getData()}, [])
    // need to set filtered_data to state
    const listItems = filtered_data.map(item =>
        <div>
            <p>Title: {item.title}</p>
            <p>Author: {item.user.login}</p>
            <p>Avatar: {item.user.avatar_url}</p>
            <p>Parent Repo: {item.repository_url}</p>
        </div>
      );
  return (
      <div>
        { listItems }
      </div>
  );
}

export default App;
