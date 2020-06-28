import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Post } from '../../post';
import { NgForm } from '@angular/forms';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  enteredTitle = '';
  enteredPost = '';

  @Output() savePost = new EventEmitter();

  onSubmit(form: NgForm): void {
   const post: Post = {
     title: form.value.title,
     postText: form.value.content,
   };

   this.savePost.emit(post);



   form.resetForm();
  }

  ngOnInit(): void {
  }

}
