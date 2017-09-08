import {JsonPlaceholderComment} from './json-placeholder-comment';

export class JsonPlaceholderPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: JsonPlaceholderComment[];
}
