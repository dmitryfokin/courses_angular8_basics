import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    { id: 1, title: 'post 1', text: 'text post 1 text post 1 text post 1 text post 1 text post 1 text post 1 text post 1 text post 1 text post 1 text post 1 text post 1 text post 1 text post 1 text post 1 ' },
    { id: 2, title: 'post 2', text: 'text post 2 text post 2 text post 2 text post 2 text post 2 text post 2 text post 2 text post 2 text post 2 text post 2 text post 2 text post 2 ' },
    { id: 3, title: 'post 3', text: 'text post 3 text post 3 text post 3 text post 3 text post 3 text post 3 ' },
  ];

}
