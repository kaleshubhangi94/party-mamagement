import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PartyManagementComponent } from './party-management/party-management.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'party-management', component: PartyManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
