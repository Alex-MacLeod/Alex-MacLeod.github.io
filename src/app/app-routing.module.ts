import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { CareerComponent } from './career/career.component';
import { EducationComponent } from './career/education/education.component';
import { ExperienceComponent } from './career/experience/experience.component';
import { SkillsComponent } from './career/skills/skills.component';

import { ContactComponent } from './contact/contact.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { HangmanComponent } from './portfolio/hangman/hangman.component';

import { InterestsComponent } from './interests/interests.component';
import { AnimeComponent } from './interests/anime/anime.component';
import { FantasyfootballComponent } from './interests/fantasyfootball/fantasyfootball.component';
import { PhotographyComponent } from './interests/photography/photography.component';
import { PoliticsnewsComponent } from './interests/politicsnews/politicsnews.component';
import { StrategygamesComponent } from './interests/strategygames/strategygames.component';
import { WalkingComponent } from './interests/walking/walking.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'career', component: CareerComponent },
  { path: 'career/education', component: EducationComponent },
  { path: 'career/experience', component: ExperienceComponent },
  { path: 'career/skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/hangman', component: HangmanComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'interests/anime', component: AnimeComponent },
  { path: 'interests/fantasyfootball', component: FantasyfootballComponent },
  { path: 'interests/photography', component: PhotographyComponent },
  { path: 'interests/politicsnews', component: PoliticsnewsComponent },
  { path: 'interests/strategygames', component: StrategygamesComponent },
  { path: 'interests/walking', component: WalkingComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
