import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TimeComponent } from './components/time/time.component';
import { ParentComponent } from './components/parent/parent.component';
import { TextComponent } from './components/text/text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TestComponent } from './components/test/test.component';
import { TextPipe } from './pipes/text.pipe';
import { StarsPipe } from './pipes/stars.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimeComponent,
    ParentComponent,
    TextComponent,
    TestComponent,
    TextPipe,
    StarsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [TextPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
