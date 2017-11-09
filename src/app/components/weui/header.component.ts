import { Component } from '@angular/core';

@Component({
	selector: 'header-cp',
	template: `
     <h1>header</h1>
     `,
     styles: [`
     	h1{
     		color: red
     	}
     `]
})
export class HeaderComponent {
	num:string = "ABC";
	name = 'Angular';
	testClick(){
		console.log("Wscats")
	}
}