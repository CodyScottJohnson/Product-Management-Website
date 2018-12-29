import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/pro-regular-svg-icons';

import { FooterComponent } from './footer/footer.component';
import { CirclesComponent } from './circles/circles.component';
import { HeaderComponent } from './header/header.component';

library.add(far);

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  declarations: [FooterComponent, CirclesComponent, HeaderComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    CirclesComponent,

  ],
 
})
export class UiModule { }
