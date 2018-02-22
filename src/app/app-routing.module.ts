import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { CareerComponent }   from './career/career.component';
import { ContactComponent }   from './contact/contact.component';
import { PortfolioComponent }   from './portfolio/portfolio.component';
import { OutsideTheOfficeComponent }   from './outside-the-office/outside-the-office.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'outsidetheoffice', component: OutsideTheOfficeComponent },
  { path: 'career/education', component: EducationComponent },
  { path: 'career/experience', component: ExperienceComponent },
  { path: 'career/skills', component: SkillsComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
