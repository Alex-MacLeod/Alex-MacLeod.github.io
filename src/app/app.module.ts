import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

import { PortfolioComponent } from './portfolio/portfolio.component';

import { CommonService } from './app.service';
import { ContactService } from './contact/contact.service';

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
    InterestsComponent,
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
  ],
  providers: [
    CommonService,
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
