import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { MenuComponent } from './elements/menu/menu.component';
import { ArticleComponent } from './elements/article/article.component';
import { FooterComponent } from './elements/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { CompanyPageComponent } from './pages/about/company-page/company-page.component';
import { TeamPageComponent } from './pages/about/team-page/team-page.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    ArticleComponent,
    FooterComponent,
    HomePageComponent,
    AboutPageComponent,
    ErrorPageComponent,
    CompanyPageComponent,
    TeamPageComponent,
    UsersComponent,
    UserDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
