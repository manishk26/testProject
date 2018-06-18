import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
  				<h1>{{name}}</h1>
  				<my-tag></my-tag>
   			<div>`
})
export class AppComponent  { name = 'Student Login';}
