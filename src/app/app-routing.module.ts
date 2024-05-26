import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageFormComponent } from './image-form/image-form.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'upload', component: ImageFormComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
