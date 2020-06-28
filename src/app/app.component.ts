import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public postsService: PostsService){

  }

  title = 'ng-posts';
  posts = [];

  catchSavePost(post: Post): void{
    this.postsService.addPost(post).subscribe((ans: []) => {
      this.posts = [...ans];
    });
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((ans: []) => {
      this.posts = [...ans];
    });
  }

}
