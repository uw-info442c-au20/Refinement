import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routing';

// material library
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// components
import { ToolbarComponent } from './refinement/components/main/toolbar/toolbar.component';
import { MainComponent } from './refinement/components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
