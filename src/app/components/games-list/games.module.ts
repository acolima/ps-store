import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card/game-card.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapChevronLeft,
  bootstrapChevronRight,
} from '@ng-icons/bootstrap-icons';
import { GamesListComponent } from './games-list.component';

@NgModule({
  declarations: [GameCardComponent, GamesListComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ bootstrapChevronLeft, bootstrapChevronRight }),
  ],
  exports: [GamesListComponent],
})
export class GamesModule {}
