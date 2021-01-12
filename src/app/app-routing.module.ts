import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchHomeComponent } from './components/launch-home/launch-home.component';

const routes: Routes = [
  {
    path:'',
    component: LaunchHomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
