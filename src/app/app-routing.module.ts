import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { EducationComponent } from './about/education/education.component';
import { ExperienceComponent } from './about/experience/experience.component';
import { SkillsComponent } from './about/skills/skills.component';

import { ContactComponent } from './contact/contact.component';

import { PortfolioComponent } from './portfolio/portfolio.component';

import { InterestsComponent } from './interests/interests.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cv/education', component: EducationComponent },
  { path: 'cv/experience', component: ExperienceComponent },
  { path: 'cv/skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'interests', component: InterestsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
