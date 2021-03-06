import { Component, OnInit } from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  title = '';
  text = '';

  constructor() { }

  ngOnInit() {
  }

  addPost() {
    if ( this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };

      console.log(post);
    }
  }
}
