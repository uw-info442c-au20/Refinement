import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// routing
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routing';

// material library
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


// components
import { ToolbarComponent } from './refinement/components/main/toolbar/toolbar.component';
import { MainComponent } from './refinement/components/main/main.component';
import { SearchBarComponent } from './refinement/components/main/toolbar/search-bar/search-bar.component';
import { HomeContentComponent } from './refinement/components/main/home-content/home-content.component';
import { AboutUsComponent } from './refinement/components/main/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainComponent,
    SearchBarComponent,
    HomeContentComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
