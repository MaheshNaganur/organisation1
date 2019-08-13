import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrganisationdisplayComponent } from './organisationdisplay/organisationdisplay.component';
import { OrganisationaddComponent } from './organisationdisplay/organisationadd/organisationadd.component';
import { EditorganisationComponent } from './organisationdisplay/editorganisation/editorganisation.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { SidebarComponent } from './sidebar/sidebar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    OrganisationdisplayComponent,
    OrganisationaddComponent,
    EditorganisationComponent,
    MenuComponent,
    SidebarComponent,


  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,routing,NgbModule,NgbPaginationModule, NgbAlertModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
