import { Routes } from '@angular/router';

import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { HomeComponent } from './pages/general/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/general/login/login.module').then(
        (mod) => mod.LoginModule
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/general/signup/signup.module').then(
        (mod) => mod.SignupModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/general/contact/contact.module').then(
        (mod) => mod.ContactModule
      ),
  },

  { path: '**', component: NotFoundComponent },
];
