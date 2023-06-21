import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgParticlesModule } from "ng-particles";
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import { AddRetryInterceptor } from '../add-retry.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),

  ],
  exports: [
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule,
    HttpClientModule,
    NgParticlesModule,
    MatStepperModule,
    MatCardModule
  ],providers: [
    {provide: HTTP_INTERCEPTORS , useClass:AddRetryInterceptor , multi:true}
  ],

})
export class SharedModuleModule { }
