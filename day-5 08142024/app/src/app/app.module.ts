import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmailPipe } from './pipes/email.pipe';
import { ExmplPromiseComponent } from './exmpl-promise/exmpl-promise.component';
import { ExmplObservableComponent } from './exmpl-observable/exmpl-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmailPipe,
    ExmplPromiseComponent,
    ExmplObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
