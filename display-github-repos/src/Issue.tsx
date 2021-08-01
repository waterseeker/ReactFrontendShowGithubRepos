import { Author } from './Author'

export interface Issue {
    title: string;
    user: Author;
    repository_url: string;
}