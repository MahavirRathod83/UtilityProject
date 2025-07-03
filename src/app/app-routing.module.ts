import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  { path: '**', redirectTo: '' },
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
