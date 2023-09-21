import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ps-store-menu',
  templateUrl: './ps-store-menu.component.html',
  styleUrls: ['./ps-store-menu.component.scss'],
})
export class PsStoreMenuComponent {
  constructor(private titleService: Title) {}

  changePageTitle(title: string) {
    this.titleService.setTitle(title + '| PlayStation™Store');
  }
}
