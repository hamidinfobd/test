import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare, faAt, faCaretLeft, faCaretRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium, faFacebook, 
  faFacebookSquare, faLinkedin, faLinkedinIn,  } from '@fortawesome/free-brands-svg-icons'; 

// Components

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { MytestComponent } from './components/mytest/mytest.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SliderComponent } from './components/slider/slider.component';
import { OwlCarComponent } from './components/owl-car/owl-car.component';

// Services
import { TeamService } from './services/team.service';
import { TeamComponent } from './components/team/team.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    MytestComponent,
    SidenavComponent,
    SliderComponent,
    OwlCarComponent,
    TeamComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    CarouselModule,
    FontAwesomeModule,
    SidebarModule.forRoot()

  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare, faCheckSquare, farCheckSquare, farCheckSquare, 
      faStackOverflow, faGithub, faMedium, faAt, faFacebook, faFacebookSquare, 
      faLinkedin, faLinkedinIn, faCaretLeft, faCaretRight, faChevronLeft, faChevronRight);
  }
 }
