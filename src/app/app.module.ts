import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CareerComponent } from './career/career.component';
import { EducationComponent } from './career/education/education.component';
import { ExperienceComponent } from './career/experience/experience.component';
import { SkillsComponent } from './career/skills/skills.component';

import { ContactComponent } from './contact/contact.component';

import { HomeComponent } from './home/home.component';

import { InterestsComponent } from './interests/interests.component';
import { PhotographyComponent } from './interests/photography/photography.component';
import { FantasyfootballComponent } from './interests/fantasyfootball/fantasyfootball.component';
import { AnimeComponent } from './interests/anime/anime.component';
import { StrategygamesComponent } from './interests/strategygames/strategygames.component';
import { WalkingComponent } from './interests/walking/walking.component';
import { PoliticsnewsComponent } from './interests/politicsnews/politicsnews.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { HangmanComponent } from './portfolio/hangman/hangman.component';

import { CommonService } from './app.service';
import { ContactService } from './contact/contact.service';
import { HangmanService } from './portfolio/hangman/hangman.service';
import { WordListsService } from './portfolio/hangman/wordlists.service';

@NgModule({
  declarations: [
    AppComponent,
    CareerComponent,
    ContactComponent,
    PortfolioComponent,
    HomeComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    HangmanComponent,
    InterestsComponent,
    PhotographyComponent,
    FantasyfootballComponent,
    AnimeComponent,
    StrategygamesComponent,
    WalkingComponent,
    PoliticsnewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    CollapseModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(
      WordListsService, { dataEncapsulation: false }
    )
  ],
  providers: [
    CommonService,
    ContactService,
    HangmanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
