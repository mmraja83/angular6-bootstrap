import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RightbarComponent } from './rightbar/rightbar.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';

import {RouterModule} from '@angular/router';
import {AppRoute} from './app.route';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RightbarComponent,
    ContentComponent,
    MenuComponent,
    SidebarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
