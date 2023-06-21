import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/services/all.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})
export class RegisterComponent {

  constructor(private _All:AllService , private _Router:Router , private toastr: ToastrService ) { }
  hide:boolean = true;

  registerForm:FormGroup = new FormGroup({
    userName:new FormControl(null , [Validators.required , Validators.minLength(8) , Validators.pattern(/^[a-z]{8,}$/)]),
    fullName:new FormControl(null , [Validators.required , Validators.pattern(/^[a-zA-Z ]*$/)]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^(?=.*\d)||(?=.*[a-z])||(?=.*[A-Z])||(?=.*\W)||([0-9])$/)])
  });

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe(
      ()=>{
        this.ShowError = false
      }
    )
  }
  ShowError = false
  register(){

    if (this.registerForm.valid) {

      this._All.RegisterForm.next(this.registerForm.value)
      this.toastr.success('Registered Sucessfully', 'Congratulations!');

      setTimeout(() => {
        this._Router.navigate(['/profile'])
      }, 1000);

    }else{
      this.ShowError = true
    }

  }
}
