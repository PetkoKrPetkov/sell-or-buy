import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './feature/home-page/home-page.component';
import { CreateComponent } from './feature/create/create.component';
import { CatalogComponent } from './feature/catalog/catalog.component';
import { ItemDetailsComponent } from './feature/item-details/item-details.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { AuthActivate } from './guards/auth.activate';
import { EditComponent } from './feature/edit/edit.component';

// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: '/home-page'
//   },
//   {
//     path: 'home-page',
//     component: HomePageComponent
//   },
//   {
//     path: 'create',
//     component: CreateComponent,
//     canActivate: [AuthActivate]
//   },
//   {
//     path: 'catalog',
//     component: CatalogComponent
//   },
//   {
//     path: 'catalog/:_id',
//     component: ItemDetailsComponent,
//     canActivate: [AuthActivate]
//   },
//   {
//     path: 'catalog/:_id/edit',
//     component: EditComponent,
//     canActivate: [AuthActivate]
//   },
//   {
//     path: '**',
//     redirectTo: '/404'
//   },
//   {
//     path: '404',
//     component: ErrorPageComponent
//   },
// ];

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
    component: CreateComponent,
    canActivate: [AuthActivate]
  },
  {
    path: 'catalog',
    canActivate: [AuthActivate],
    children: [
      {
        path: ':_id',
        component: ItemDetailsComponent
      },
      {
        path: ':_id/edit',
        component: EditComponent
      },
      {
        path: '',
        component: CatalogComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
];



export const  AppRoutingModule = RouterModule.forRoot(routes);
