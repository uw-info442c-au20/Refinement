import { Routes } from '@angular/router';
import { MainComponent } from './refinement/components/main/main.component';
import { HomeContentComponent } from './refinement/components/main/home-content/home-content.component';
import { AboutUsComponent } from './refinement/components/main/about-us/about-us.component';

export const APP_ROUTES: Routes = [
  { 
    path: '',
    component: MainComponent, 
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeContentComponent },
      { path: 'about-us', component: AboutUsComponent },
    ]
  } 
];
