import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroAreaComponent } from './hero-area/hero-area.component';
import { ChallengeAreaComponent } from './challenge-area/challenge-area.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PrizesComponent } from './prizes/prizes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroAreaComponent,
    ChallengeAreaComponent,
    TimelineComponent,
    PrizesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
