import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from '../app/auth.guard';
import { ContactComponent } from './components/contact/contact.component';
import { ListComponent } from './pages/list/list.component';
import {  DashHomeComponent } from './pages/dash-home/dash-home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent,  
    children: [
      { path: '', component: DashHomeComponent },
      { path: 'list', component: ListComponent },
      { path: '**', redirectTo: '' },
    ],
  },
  { path: '**', redirectTo: '/' } // Redirect unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// canActivate: [AuthGuard],