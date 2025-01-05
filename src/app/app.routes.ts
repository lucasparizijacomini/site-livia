import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LocalizacaoComponent } from './pages/localizacao/localizacao.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'localizacao',
    component: LocalizacaoComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
