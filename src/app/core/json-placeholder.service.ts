import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { JsonPlaceholderPost } from './models/json-placeholder-post';
import { JsonPlaceholderComment } from './models/json-placeholder-comment';
import { JsonPlaceholderAuthor } from './models/json-placeholder-author';

@Injectable()
export class JsonPlaceholderService {
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  get data() {
    return this.dataChange.value;
  }
  constructor(private http: HttpClient) { }

  getPosts(): Observable<JsonPlaceholderPost[]> {
    return this.http.get<JsonPlaceholderPost[]>('posts').map(res => {
      this.dataChange.next(res);
      return res;
    });
  }
  getPost(id): Observable<any> {
    return this.http.get(`posts/${id}`);
  }
  createPost(body): Observable<any> {
    return this.http.post('posts', body);
  }
  getComments(id): Observable<any> {
    return this.http.get(`posts/${id}/comments`);
  }
  getAuthor(id): Observable<any> {
    return this.http.get<JsonPlaceholderAuthor>(`users/${id}`);
  }
}
