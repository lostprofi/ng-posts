import { Component, OnInit, Input, Output } from '@angular/core';
import { Post } from '../../post';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  @Input() posts: Post[];

  @Output() delPost = new EventEmitter();

  onClick(postId: string){
    this.delPost.emit(postId);
  }

  ngOnInit(): void {

  }

}
