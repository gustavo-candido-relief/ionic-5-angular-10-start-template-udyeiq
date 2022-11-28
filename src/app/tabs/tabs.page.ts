import { Component, Injector, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { NavController } from '@ionic/angular';
import { createCustomElement } from '@angular/elements';
import { SelectAllPlusSearchComponent } from './select-all-plus-search.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  private filterValue: number;

  public items: string[] = ['one', 'two'];
  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private location: Location,
    private router: Router,
    private injector: Injector
  ) {
    const element = createCustomElement(SelectAllPlusSearchComponent, {
      injector: this.injector
    });
    customElements.define(`c-select-all-plus-search`, element);
  }
  selectAll() {
    console.log('select all');
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // Initialize filter from route if route changed
      this.filterValue = parseInt(params['filter']);
    });
  }

  incrementFilter() {
    // let newPath = "tabs/" + (this.filterValue + 1).toString()
    // this.navController.navigateForward(newPath);
    const navExtras = this.filterValue
      ? { queryParams: { filter: this.filterValue } }
      : {};
    this.router.navigate([], { ...navExtras });
  }
}
