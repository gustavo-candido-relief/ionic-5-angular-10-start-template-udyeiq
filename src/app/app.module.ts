import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, ActivatedRouteSnapshot } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export class MyRouteReuseStrategy extends IonicRouteStrategy {
  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    let shouldReuse = super.shouldReuseRoute(future, curr);

    if (this.getResolvedPath(future).includes("/tabs/") && this.getResolvedPath(curr).includes("/tabs/")) {
  		return true;
  	}

    return shouldReuse;
  }

  getResolvedPath(route: ActivatedRouteSnapshot): string {
    // Get lowest child
    let childRoute = route;
    while (childRoute.children.length > 0) { childRoute = childRoute.children[0]; }

    // Get path
    let path = childRoute.pathFromRoot
        .map(v => v.url.map(segment => segment.toString()).join('/'))
        .join('/')

    // Replace double slashs
    while (path.includes("//")) { path = path.replace("//", "/"); }

    return path;
  }  
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
