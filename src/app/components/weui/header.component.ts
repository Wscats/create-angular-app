import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'header-cp',
	template: `
     <h1 [ngClass]="{'red':bool}">header</h1>
     <button (click)="testClick()">OK</button>
     //驼峰和非驼峰写法均可
     <p [ngStyle]="{'backgroundColor':'green'}">header</p>
     <p [ngStyle]="{'background-color':'green'}">header</p>
     <div class="container" [ngSwitch]="myVar">
		 <div *ngSwitchCase="'A'">Var is A</div>
		 <div *ngSwitchCase="'B'">Var is B</div>
		 <div *ngSwitchCase="'C'">Var is C</div>
		 <div *ngSwitchDefault>Var is something else</div>
	</div>
	<div ngNonBindable>
 		{{我不会被绑定}}
	</div>
	<div [innerHTML]="html" ></div>
     `,
	styles: [`
     	.red{
     		color: red
     	}
     `]
})
export class HeaderComponent {
	html: any;
	constructor(private sanitizer: DomSanitizer) {
		this.html = this.sanitizer.bypassSecurityTrustHtml("<p>要进行<span style='color: red'>转换的内容</span>~</p>");
	}
	myVar: string = "A";
	bool: boolean = true;
	testClick() {
		this.bool = !this.bool;
	};
	/*onInit(): void {
		this.html = this.sanitizer.bypassSecurityTrustHtml('<p>要进行<span>转换的内容</span></p>');
		//这里比如返回的一个html内容，或是其它如一张 svg 的图等，用上面代码转一下就可以了，就不会那那个错误了。
	}*/
}