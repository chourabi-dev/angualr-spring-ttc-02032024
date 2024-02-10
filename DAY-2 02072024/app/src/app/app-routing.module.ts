import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { CompanyPageComponent } from './pages/about/company-page/company-page.component';
import { TeamPageComponent } from './pages/about/team-page/team-page.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path:'', component:HomePageComponent, canActivate:[AuthGuard] },
  { path:'home', component:HomePageComponent , canActivate:[AuthGuard] },
  { path:'about', component:AboutPageComponent , canActivate:[AuthGuard]  , children:[

    { path:'company', component:CompanyPageComponent    },
    { path:'team', component:TeamPageComponent  }
    

  ]}, 
  { path:'users', component:UsersComponent , canActivate:[AuthGuard]  },
  { path:'users/details/:id', component:UserDetailsComponent , canActivate:[AuthGuard]  },

  { path:'auth', component:LoginComponent  },



  

  // WILD CARD !!!
  { path:'**' , component:ErrorPageComponent }


  // NESTED ROUTING !!!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
