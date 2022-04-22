import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/services/auth.guard';


const routes: Routes = [

  
{ path: 'foodbank', loadChildren: () => import('./pages/foodbank/foodbank.module').then(m => m.FoodbankModule), canActivate: [AuthGuard]},
  
{ path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  
{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },

{ path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/not-found'
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
