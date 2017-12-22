import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { CareerComponent }   from './career/career.component';
import { ContactComponent }   from './contact/contact.component';
import { PortfolioComponent }   from './portfolio/portfolio.component';
import { OutsideTheOfficeComponent }   from './outside-the-office/outside-the-office.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'outsidetheoffice', component: OutsideTheOfficeComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
