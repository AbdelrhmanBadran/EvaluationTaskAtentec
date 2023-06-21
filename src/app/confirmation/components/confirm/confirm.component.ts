import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllService } from 'src/app/services/all.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

  constructor(private _All:AllService , private _formBuilder: FormBuilder){ }

  profileData:any
  registerData:any

  userName:any
  fullName:any
  password:any

  firstName:any
  lastName:any
  age:any
  address:any
  country:any

  ngOnInit(): void {


    this._All.profileUser.subscribe({
      next:res=>{
        this.profileData = res
        console.log(this.profileData);

        this.firstName = this.profileData.firstName
        this.lastName = this.profileData.lastName
        this.age = this.profileData.age
        this.address = this.profileData.address
        this.country = this.profileData.country
      }
    })
    this._All.RegisterForm.subscribe({
      next:res=>{
        this.registerData = res
        console.log(this.registerData);

        this.userName = this.registerData.userName
        this.fullName = this.registerData.fullName
        this.password = this.registerData.password
      }
    })

  }


}
