import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './components/confirm/confirm.component';

const routes: Routes = [
  {path:'' , redirectTo:'' , pathMatch:'full'},
  {path:'' , component:ConfirmComponent , title:'confirm'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmationRoutingModule { }
