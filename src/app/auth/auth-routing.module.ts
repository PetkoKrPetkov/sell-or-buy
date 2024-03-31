import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LoggedInGuard } from '../guards/logged-in-guard.guard';
import { AuthActivate } from '../guards/auth.activate';

const  routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthActivate]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AuthRoutingModule {}
