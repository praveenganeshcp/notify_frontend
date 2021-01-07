import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AccountshellComponent } from './components/accountshell/accountshell.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
    },
    {
        path: 'app',
        loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
    },
    {
        path: 'accounts',
        component: AccountshellComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'signup',
                component: SignupComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
