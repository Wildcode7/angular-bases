import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  

  public name:string = 'ironman';
  public age: number = 70;
capitalize: any;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {

    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'Spiderman'
  }


  changeAge(): void{
    this.age = 57;
  }






  resetForm():void {
    this.name = 'iroman';
    this.age = 77;
  }
}









