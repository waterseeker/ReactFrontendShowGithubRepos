import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { Issue } from './Issue'

function App() {
    const [data, setData] = useState<Issue[]>([])
    const getData = async () => {
        const [firstResponse, secondResponse, thirdResponse] = await Promise.all([
            axios.get(`https://api.github.com/repos/microsoft/TypeScript/issues`), 
            axios.get(`https://api.github.com/repos/facebook/react/issues`),
            axios.get(`https://api.github.com/repos/graphql/graphql-js/issues`)
        ])
       let combinedResponse = [...firstResponse.data, ...secondResponse.data, ...thirdResponse.data]
       setData(combinedResponse)
    }
    
    useEffect(() => {
        getData()
        // const getData = () => mockData
        let filtered_data = data.filter(entry => !Boolean(entry.pull_request))
        console.log(filtered_data)
        setData(filtered_data)
    }, [])
    const listItems = data.map(item =>
        <div key={item.id}>
            <p>Title: <a href={item.html_url}>{item.title}</a></p>
            <p>Author: <a href={item.user.html_url}>{item.user.login}</a></p>
            <p>Avatar: <a href={item.user.html_url}>{item.user.avatar_url}</a></p>
            <p>Parent Repo: <a href={item.html_url.split('/issues')[0]}>{item.repository_url}</a></p>
            <button></button>
        </div>
      );
  return (
      <div>
        { listItems }
      </div>
  );
}

export default App;
