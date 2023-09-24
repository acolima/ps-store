import { Component } from '@angular/core';
import { lists } from 'src/app/utils/games';
import { List } from 'src/app/utils/models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  lists: List[] = lists;
}
