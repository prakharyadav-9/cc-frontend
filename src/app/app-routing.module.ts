import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'login-get',component:LoginComponent },
  {path: 'dashboard',component:DashboardComponent ,canActivate: [AuthGuard] },
  {path: 'register',component:RegisterComponent },
  {path: '',redirectTo:'login-get',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
