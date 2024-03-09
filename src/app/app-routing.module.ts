import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './feature/home-page/home-page.component';
import { CreateComponent } from './feature/create/create.component';
import { CatalogComponent } from './feature/catalog/catalog.component';
import { ProfileComponent } from './feature/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home-page'
  },
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
];


export const  AppRoutingModule = RouterModule.forRoot(routes);

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
