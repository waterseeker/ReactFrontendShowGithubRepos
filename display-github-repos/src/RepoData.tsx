import { Issue } from './Issue'


const RepoData = ({ html_url, title, user, id}:Issue) => {  
    let mainRepoName = html_url.split('/')[4]
    return (
        <li key={id}>
            <p>Title: <a href={html_url}>{title}</a></p>
            <p>Author: <a href={user.html_url}>{user.login}</a></p>
            <p>Avatar: <a href={user.html_url}>{user.avatar_url}</a></p>
            <p>Parent Repo: <a href={html_url.split('/issues')[0]}>{mainRepoName}</a></p>
        </li>
    )
}

export default RepoData



