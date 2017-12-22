import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { OutsideTheOfficeComponent } from './outside-the-office/outside-the-office.component';


@NgModule({
  declarations: [
    AppComponent,
    CareerComponent,
    ContactComponent,
    PortfolioComponent,
    HomeComponent,
    OutsideTheOfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
