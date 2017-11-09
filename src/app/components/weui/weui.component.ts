import { Component } from '@angular/core';

@Component({
	selector: 'weui-cp',
	template: `
     <h1>weui</h1>
     `,
     styles: [`
     	h1{
     		color: red
     	}
     `]
})
export class WeuiComponent {
	num:string = "ABC";
	name = 'Angular';
	testClick(){
		console.log("Wscats")
	}
}