import { Routes } from '@angular/router';
import { ExperiencesComponent } from 'app/pages/experiences/experiences.component';
import { HomeComponent } from 'app/pages/home/home.component';
import { AboutMeComponent } from 'app/pages/about-me/about-me.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'about-me', component: AboutMeComponent },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
