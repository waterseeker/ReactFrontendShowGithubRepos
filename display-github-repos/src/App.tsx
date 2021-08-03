import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { Issue } from './Issue'
import RepoData from './RepoData';

function App() {
    const [data, setData] = useState<Issue[]>([])
    const getData = async () => {
        const [firstResponse, secondResponse, thirdResponse] = await Promise.all([
            axios.get(`https://api.github.com/repos/microsoft/TypeScript/issues`), 
            axios.get(`https://api.github.com/repos/facebook/react/issues`),
            axios.get(`https://api.github.com/repos/graphql/graphql-js/issues`)
        ])
       let combinedResponse = [...firstResponse.data, ...secondResponse.data, ...thirdResponse.data]
       let alphabetizedIssues = combinedResponse.sort((a, b) => (a.title > b.title) ? 1 : -1)
       setData(alphabetizedIssues)
    }

    const deleteIssue = (id: number) => {
        let filteredData = data.filter(issue => issue.id !== id)
        setData(filteredData)
    }

    useEffect(() => {
        getData()
        let filtered_data = data.filter(entry => !Boolean(entry.pull_request))
        setData(filtered_data)
    }, [])

    const listItems = data.map(item =>      
        <div className='container' key={item.id}>
            <RepoData   id={item.id} 
                        title={item.title} 
                        user={item.user}
                        pull_request={item.pull_request}
                        html_url={item.html_url}/>
            <button className= 'btn delete_button' onClick={() => {deleteIssue(item.id)}}>Delete Issue</button>
        </div>
      );

  return (    
    <div>
        <h1>Github Issues</h1>
        <ul>
            { listItems }
        </ul>
    </div>
  );
}

export default App;
