import { Author } from './Author'

export interface Issue {
    title: string;
    user: Author;
    repository_url: string;
    pull_request: string
    id: number
    html_url: string;
}

