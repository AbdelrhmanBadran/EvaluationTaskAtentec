import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModuleModule,
    HttpClientModule
  ]
})
export class ProfileModule { }
