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
import { ionMenuSharp } from '@ng-icons/ionicons';
import { PsStoreMenuComponent } from './ps-store-menu/ps-store-menu.component';
import { PsMenuMobileComponent } from './ps-menu-mobile/ps-menu-mobile.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PsMenuComponent,
    PsStoreMenuComponent,
    SonyBarComponent,
    PsMenuMobileComponent,
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      bootstrapChevronDown,
      bootstrapSearch,
      ionMenuSharp,
    }),
  ],
  exports: [HeaderComponent, PsStoreMenuComponent],
})
export class HeaderModule {}
