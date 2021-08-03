import { Issue } from './Issue'

const RepoData = ({ html_url, title, user, repository_url, id}:Issue) => {       
    return (
        <div key={id}>
            <p>Title: <a href={html_url}>{title}</a></p>
            <p>Author: <a href={user.html_url}>{user.login}</a></p>
            <p>Avatar: <a href={user.html_url}>{user.avatar_url}</a></p>
            <p>Parent Repo: <a href={html_url.split('/issues')[0]}>{repository_url}</a></p>
        </div>
    )
}

export default RepoData


