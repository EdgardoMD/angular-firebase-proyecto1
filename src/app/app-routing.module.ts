import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
{ path: '',  redirectTo: '/login', pathMatch: 'full' },
{ path: 'list', loadChildren: () => import('./pages/students/list/list.module').then(m => m.ListModule),
canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
{ path: 'new', loadChildren: () => import('./pages/students/new/new.module').then(m => m.NewModule),
canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
{ path: 'details', loadChildren: () => import('./pages/students/details/details.module').then(m => m.DetailsModule),
canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
{ path: 'edit',  loadChildren: () => import('./pages/students/edit/edit.module').then(m => m.EditModule),
canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
{ path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
{ path: 'news', component: NewsComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
