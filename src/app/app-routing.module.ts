import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { CareerComponent } from './career/career.component';
import { EducationComponent } from './career/education/education.component';
import { ExperienceComponent } from './career/experience/experience.component';
import { SkillsComponent } from './career/skills/skills.component';

import { ContactComponent } from './contact/contact.component';

import { PortfolioComponent } from './portfolio/portfolio.component';

import { InterestsComponent } from './interests/interests.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'career', component: CareerComponent },
  { path: 'career/education', component: EducationComponent },
  { path: 'career/experience', component: ExperienceComponent },
  { path: 'career/skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'interests', component: InterestsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
