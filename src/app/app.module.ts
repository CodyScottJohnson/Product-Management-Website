import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/pro-regular-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ProjectsComponent } from './views/projects/projects.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { ContactModalComponent } from './modals/contact-modal/contact-modal.component';
import { AdminComponent } from './views/admin/admin.component';
import { NewProjectComponent } from './modals/contact-modal/new-project/new-project.component';
import { EventsComponent } from './views/events/events.component';

library.add(far);

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,
    ContactModalComponent,
    AdminComponent,
    NewProjectComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    FormsModule, 
    ReactiveFormsModule, 

    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  entryComponents: [ContactModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
