import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from '../components/game-card/game-card.component';
import { MainPageComponent } from './main/main-page.component';
import { HeaderComponent } from '../components/header/header.component';
import { HeaderModule } from '../components/header/header.module';

@NgModule({
  declarations: [GameCardComponent, HeaderComponent, MainPageComponent],
  imports: [CommonModule, HeaderModule],
  exports: [MainPageComponent],
})
export class PagesModule {}
