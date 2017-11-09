import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
     <h1>Hello {{name}}</h1>
     <button (click)="testClick()">ok</button>
     <p>{{num}}</p>
     <input type="text" [(ngModel)]="num" />
     `,
     styles: [`
     	h1{
     		color: red
     	}
     `]
})
export class AppComponent {
	num:string = "ABC";
	name = 'Angular';
	testClick(){
		console.log("Wscats")
	}
}