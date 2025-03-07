import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'SEU_DOMINIO_AUTH0',
      clientId: 'SEU_CLIENT_ID',
      authorizationParams: {
        redirect_uri: window.location.origin
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
