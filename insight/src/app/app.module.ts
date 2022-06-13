import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaidLinkSetupComponent } from './plaid-link-home/plaid-link-setup/plaid-link-setup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InsightHomeComponent } from './insight-home/insight-home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgxPlaidLinkModule } from 'ngx-plaid-link';
import { PlaidLinkHomeComponent } from './plaid-link-home/plaid-link-home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthGaurd } from 'src/shared/auth-gaurd';
import { AuthService } from 'src/services/auth/auth-service';
import { AuthStorageService } from 'src/services/auth/local-storage-service';
import { HttpClientInterceptor } from 'src/services/interceptors/http-client-interceptor';
import { PlaidLinkTokenService } from 'src/services/plaid-link-token-service';

@NgModule({
  declarations: [
    AppComponent,
    PlaidLinkSetupComponent,
    NavbarComponent,
    InsightHomeComponent,
    LoginComponent,
    SignupComponent,
    PlaidLinkHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPlaidLinkModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGaurd,
    AuthService,
    AuthStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true },
        PlaidLinkTokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
