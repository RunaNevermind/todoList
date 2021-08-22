import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcourceComponent } from './ToDoList/addcource/addcource.component';
import { AuthenticationComponent } from './ToDoList/Authentication/authentication/authentication.component';
import { AuthGuard }   from './ToDoList/Authentication/service/auth.guard';
import { MaincourseComponent } from './ToDoList/maincourse/maincourse.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component: AuthenticationComponent},
  {path: 'cources', component: MaincourseComponent, canActivate:[AuthGuard]},
  {path: 'addcource', component: AddcourceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
