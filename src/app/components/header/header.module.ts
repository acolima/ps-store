import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SonyBarComponent } from './sony-bar/sony-bar.component';
import { PsMenuComponent } from './ps-menu/ps-menu.component';

import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapChevronDown,
  bootstrapSearch,
} from '@ng-icons/bootstrap-icons';
import { PsStoreMenuComponent } from './ps-store-menu/ps-store-menu.component';

@NgModule({
  declarations: [PsMenuComponent, PsStoreMenuComponent, SonyBarComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ bootstrapChevronDown, bootstrapSearch }),
  ],
  exports: [PsMenuComponent, PsStoreMenuComponent, SonyBarComponent],
})
export class HeaderModule {}
