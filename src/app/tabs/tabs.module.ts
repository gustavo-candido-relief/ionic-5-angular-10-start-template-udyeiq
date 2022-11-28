import { IonicModule } from '@ionic/angular';
import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { SelectAllSearchDirective } from './select-all-search-directive';
import { SelectAllPlusSearchComponent } from './select-all-plus-search.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, TabsPageRoutingModule],
  declarations: [
    TabsPage,
    SelectAllSearchDirective,
    SelectAllPlusSearchComponent
  ],
  entryComponents: [SelectAllPlusSearchComponent]
})
export class TabsPageModule {}
