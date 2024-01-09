import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './_components/home/home';
import { Login } from './_components/login/login';
import { Register } from './_components/register/register';

const routes: Routes = [
  // {path: '', component: Home},
  {path: 'login', component: Login},
  {path: 'register', component: Register}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
