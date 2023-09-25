import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SonyBarComponent } from './sony-bar/sony-bar.component';
import { PsMenuComponent } from './ps-menu/ps-menu.component';
import { HeaderComponent } from './header.component';

import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapChevronDown,
  bootstrapSearch,
} from '@ng-icons/bootstrap-icons';
import { PsStoreMenuComponent } from './ps-store-menu/ps-store-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PsMenuComponent,
    PsStoreMenuComponent,
    SonyBarComponent,
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ bootstrapChevronDown, bootstrapSearch }),
  ],
  exports: [HeaderComponent, PsStoreMenuComponent],
})
export class HeaderModule {}
