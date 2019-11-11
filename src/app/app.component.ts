import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dynamic title';
  number = 42;
  arr = [1, 2, 3];
  obj = {
    a: 1,
    b: {c: 2}
  };

  // obj$ = JSON.stringify(this.obj);

  // img = 'https://cdn.imgbin.com/14/10/23/imgbin-react-computer-icons-redux-javascript-others-sys1f0s7BFP7wbYz2H77apPRH.jpg';

  inputValue: string = ''



  constructor() {
  //   setTimeout(() => {
  //     console.log('5 seconds');
  //     this.img = 'https://im0-tub-ru.yandex.net/i?id=d7fc7d45dd62b86fc50553ecc0962fbc&n=13';
  //   }, 5000)
   }

   onInput(event) {
     console.log(event);
     this.inputValue = event.target.value;
   }
   onClick(event) {
     console.log(event);
     this.inputValue =this.inputValue.toUpperCase()
   }
}
