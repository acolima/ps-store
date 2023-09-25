import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../components/header/header.module';
import { GamesModule } from '../components/games-list/games.module';

import { MainPageComponent } from './main/main-page.component';
import { FooterComponent } from '../components/footer/footer.component';
import { BannerComponent } from '../components/banner/banner.component';

@NgModule({
  declarations: [BannerComponent, FooterComponent, MainPageComponent],
  imports: [CommonModule, HeaderModule, GamesModule],
  exports: [MainPageComponent],
})
export class PagesModule {}
