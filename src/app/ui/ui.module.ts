import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/pro-regular-svg-icons';

import { FooterComponent } from './footer/footer.component';
import { CirclesComponent } from './circles/circles.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CirclesNewComponent } from './circles-new/circles-new.component';

library.add(far);

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  declarations: [FooterComponent, CirclesComponent, HeaderComponent, SideNavComponent, CirclesNewComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    CirclesComponent,
    SideNavComponent

  ],
 
})
export class UiModule { }
