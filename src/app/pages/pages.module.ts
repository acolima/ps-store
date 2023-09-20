import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from '../components/game-card/game-card.component';
import { MainPageComponent } from './main/main-page.component';

@NgModule({
  declarations: [GameCardComponent, MainPageComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class PagesModule {}
