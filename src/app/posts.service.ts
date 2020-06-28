import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  options = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  addPost(post: Post ){

    const body = JSON.stringify(post);

    return this.http.post('http://localhost:3000', body, this.options);
  }

  getPosts(){
    return this.http.get('http://localhost:3000');
  }

}
