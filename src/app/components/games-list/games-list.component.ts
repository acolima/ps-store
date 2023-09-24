import { Component, Input } from '@angular/core';
import { Game } from 'src/app/utils/models';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent {
  @Input() listTitle: string = '';
  @Input() games: Game[] = [];
}
