import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main/main-page.component';
import { HeaderComponent } from '../components/header/header.component';
import { HeaderModule } from '../components/header/header.module';
import { BannerComponent } from '../components/banner/banner.component';
import { GamesModule } from '../components/games-list/games.module';
import { GamesListComponent } from '../components/games-list/games-list.component';

@NgModule({
  declarations: [
    BannerComponent,
    GamesListComponent,
    HeaderComponent,
    MainPageComponent,
  ],
  imports: [CommonModule, HeaderModule, GamesModule],
  exports: [MainPageComponent],
})
export class PagesModule {}
