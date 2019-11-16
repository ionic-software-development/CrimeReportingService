import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CrsSharedModule } from 'app/shared/shared.module';
import { CrsCoreModule } from 'app/core/core.module';
import { CrsAppRoutingModule } from './app-routing.module';
import { CrsHomeModule } from './home/home.module';
import { CrsEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CrsSharedModule,
    CrsCoreModule,
    CrsHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CrsEntityModule,
    CrsAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class CrsAppModule {}
