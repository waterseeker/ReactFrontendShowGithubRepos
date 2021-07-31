import { Author } from './Author'

export interface Issue {
    title: string;
    author: Author;
    parent_repo: string;
    pull_request: string;
}