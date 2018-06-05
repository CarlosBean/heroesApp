import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import { APP_ROUTING } from './app.routes';
import { HeroesService } from './services/heroes.service';
import { KeysPipe } from './pipes/keys.pipe';
import { RegexPipe } from './pipes/regex.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { NumberDirective } from './directives/number.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe,
    RegexPipe,
    HighlightDirective,
    NumberDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING,
    ReactiveFormsModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
