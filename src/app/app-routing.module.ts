import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ContactComponent } from './views/contact/contact.component';
import { EventsComponent } from './views/events/events.component';
const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Events', component: EventsComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
