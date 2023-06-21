import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path:'' , redirectTo:'register' , pathMatch:'full'},
  {path:'register' , component:RegisterComponent , title:'register'},
  {path:'profile' , loadChildren: () => import('./profile/profile.module').then(m=>m.ProfileModule)},
  {path:'confirm' , loadChildren: () => import('./confirmation/confirmation.module').then(m=>m.ConfirmationModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
