import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: 'list', loadChildren: () => import('./pages/students/list/list.module').then(m => m.ListModule) },
{ path: 'new', loadChildren: () => import('./pages/students/new/new.module').then(m => m.NewModule) },
{ path: 'list', loadChildren: () => import('./pages/students/details/details.module').then(m => m.DetailsModule) },
{ path: 'edit', loadChildren: () => import('./pages/students/edit/edit.module').then(m => m.EditModule) },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
{ path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
