import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
	  			<h2>
	  				Welcome {{ name }}
	  			</h2>
	  			<h2>{{2+2}}</h2>
	  			<h2>{{"Welcome " + name}}</h2>
	  			<h2>{{ name.length }}</h2>
	  			<h2>{{name.toUpperCase()}}</h2>
	  			<h2>{{greetUser()}}</h2>
	  			<h2>{{siteUrl}}</h2>
	  			<input [id]="myId" type="text" value="test"/>
	  			<input [disabled]="isDisabled" type="text" value="test"/>
	  			<h2 [class]="successClass">Test</h2>
	  			<h2 [class.text-danger]="hasError">Test</h2>
				<h2 [ngClass] = "messageClasses"> Test </h2>
				<h2 [style.color]="'red'">Style Binding</h2>
				<h2 [style.color]="highlightColor">Style Binding 2</h2>
				<h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 3</h2>
				<h2 [ngStyle]="titleStyles">Style Binding 4</h2>
				<button (click)="onClick($event)">Greet</button>
				{{greeting}}
				<button (click)="greeting='Welcomw!!'">Greet</button>
  			`,
  styles: [`
  .text-success {
		color : green;
	}
	.text-danger {
		color: red;
	}
	.text-special {
		font-style: italic;
	}
  `]
})
export class TestComponent implements OnInit {
	public name = "Gurvinder";
	public siteUrl = window.location.href;
	public myId = "tetsId";
	public isDisabled = false;
	public hasError = false;
	public isSpecial = true;
	public messageClasses = {
		"text-success": !this.hasError,
		"text-error": this.error,
		"text-special": this.isSpecial
	};
	public highlightColor = "Orange";
	public titleStyles = {
		color: "blue";
		fontStyle: "italic"
	}
	public greeting = "";
	onClick(event) {
		console.log('Welcome');
		console.log(event);
		this.greeting = "Welcome to this site";
	}
  constructor() { }

  ngOnInit() {
  }
  greetUser(){
  	return "Hi " + this.name;
  }
}
