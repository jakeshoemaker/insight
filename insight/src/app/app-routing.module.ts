import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from 'src/shared/auth-gaurd';
import { InsightHomeComponent } from './insight-home/insight-home.component';
import { LoginComponent } from './login/login.component';
import { PlaidLinkSetupComponent } from './plaid-link-home/plaid-link-setup/plaid-link-setup.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: InsightHomeComponent, canActivate: [AuthGaurd] },
  { path: 'plaid-setup', component: PlaidLinkSetupComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
