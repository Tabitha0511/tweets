import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppShellComponent } from './app-shell/app-shell.component';
import { TweetContentComponent } from './tweet-content/tweet-content.component';
import { RightNavComponent } from './right-nav/right-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent,
    TweetContentComponent,
    RightNavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
