import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning';
  name="nishakumari"
  //using object property//
  obj={
    name:'nisha',
    age:24
  }
  // using function
  getName(){
    return this.name
  }
  //using array//
  arr=['nisha','rita','sits','tina','sima']
  
}
