import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Con1Component } from './con1/con1.component';
import { Con2Component } from './con2/con2.component';
import { Con3Component } from './con3/con3.component';
import { Con4Component } from './con4/con4.component';
import { Con5Component } from './con5/con5.component';
import { Con6Component } from './con6/con6.component';
import { Con7Component } from './con7/con7.component';
import { Con8Component } from './con8/con8.component';
import { Con9Component } from './con9/con9.component';
import { Con10Component } from './con10/con10.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Con1Component,
    Con2Component,
    Con3Component,
    Con4Component,
    Con5Component,
    Con6Component,
    Con7Component,
    Con8Component,
    Con9Component,
    Con10Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
