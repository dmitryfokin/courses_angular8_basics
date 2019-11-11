import {Component} from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
    <div class="post4">
        <h2>Post 4 title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur delectus ex illum incidunt nulla officiis quisquam similique soluta totam. Dignissimos enim facere in laboriosam magnam maxime quasi suscipit! Aliquam aliquid dicta eius ex molestiae nesciunt nobis pariatur soluta voluptate.</p>
    </div>
  `,
  styles: [`
    .post4{
      padding: .5rem;
      border: 2px solid black;
    } 
    h2 {
      font-size: 1rem;
    }
  `]
})

export class Post4Component {

}
