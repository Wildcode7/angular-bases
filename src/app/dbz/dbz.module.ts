import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './Pages/main-page.component';
import { TestComponent } from './components/test/test.component';
import { HeroesModule } from '../heroes/heroes.module';



@NgModule({
  declarations: [
    MainPageComponent,
    TestComponent,
  ],
  exports: [
    MainPageComponent
      ],
  imports: [
    CommonModule,
    HeroesModule
  ]
})
export class DbzModule { }
