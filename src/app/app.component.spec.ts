import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { EducationComponent } from './career/education/education.component';
import { ExperienceComponent } from './career/experience/experience.component';
import { SkillsComponent } from './career/skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HangmanComponent } from './portfolio/hangman/hangman.component';
import { InterestsComponent } from './interests/interests.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      ],
      imports: [
        AppRoutingModule,
        ReactiveFormsModule,
        AlertModule.forRoot(),
        CarouselModule.forRoot(),
        PaginationModule.forRoot(),
        CollapseModule.forRoot(),
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
