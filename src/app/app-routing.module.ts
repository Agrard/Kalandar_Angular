import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {loginComponent} from './components/Form/login/loginComponent'
const routes: Routes = [
  {path: '', component: login}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//login.component