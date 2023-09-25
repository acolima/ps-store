import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Game } from 'src/app/utils/models';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent {
  @Input() listTitle: string = '';
  @Input() games: Game[] = [];

  @ViewChild('list') listEl!: ElementRef;

  displayButton: string = 'forward';

  goForward() {
    this.listEl.nativeElement.scrollBy({
      left: 260 * 6,
      behavior: 'smooth',
    });
    setTimeout(() => (this.displayButton = 'back'), 500);
  }

  goBack() {
    this.listEl.nativeElement.scrollBy({
      left: -(260 * 6),
      behavior: 'smooth',
    });
    setTimeout(() => (this.displayButton = 'forward'), 500);
  }
}
