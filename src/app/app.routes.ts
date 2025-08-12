import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PersonalInfo } from './pages/personal-info/personal-info';
import { Experience } from './pages/experience/experience';
import { Education } from './pages/education/education';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';


export const routes: Routes = [
  { path: '', redirectTo: 'page/home', pathMatch: 'full' },
  { path: 'page/home', component: Home },
  { path: 'page/personal-info', component: PersonalInfo },
  { path: 'page/experience', component: Experience },
  { path: 'page/education', component: Education },
  { path: 'page/skills', component: Skills },
  { path: 'page/projects', component: Projects },
  { path: 'page/contact', component: Contact },
  { path: '**', redirectTo: 'page/home', pathMatch: 'full' }
];

