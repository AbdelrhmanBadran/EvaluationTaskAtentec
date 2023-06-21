import { toggleFade } from './../../../animation/toggle-fade';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { ProfileServiceService } from '../../services/profile-service.service';
import { AllService } from 'src/app/services/all.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  animations:[toggleFade]
})
export class UserProfileComponent {

  constructor(private _profile:ProfileServiceService , private _All:AllService , private toastr :ToastrService , private _Router:Router){ }

  isValid:boolean = false;
  myControl = new FormControl('' , Validators.required);
  options: string[]  = [];
  filteredOptions: Observable<string[]> | undefined;
  ShowError:boolean = false
  profileUser:any
  LoginForm:FormGroup = new FormGroup({
    firstName: new FormControl(null , Validators.required),
    lastName: new FormControl(null , [Validators.required ]),
    age: new FormControl(null , [Validators.required , Validators.pattern(/^([1-9][0-9]{1,2}|8|9)$/)]),
    address: new FormControl(null , Validators.required ),
  })
  SUB:any
  ngOnInit() {
    this.SUB =  this._profile.getAllCountries().subscribe({
      next:res=>{
        res.data.forEach((ele:any) => {
          this.options.push(ele.countryName)
        });
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
          debounceTime(800)
        );
      }
    })

    this.LoginForm.valueChanges.subscribe(
      res=>{
        if (this.LoginForm.valid && this.myControl.valid) {
          this.isValid = true
        }else{
          this.isValid = false
        }

      }
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));

  }
  login()
  {
    if (this.LoginForm.valid && this.myControl.valid) {
      this.profileUser = {...this.LoginForm.value , country:this.myControl.value}
      this._All.profileUser.next(this.profileUser)
      this.toastr.success('Your Profile is Completed', 'Congratulations!');
      setTimeout(() => {
        this._Router.navigate(['/confirm'])
      }, 1000);

    }
  }
  ngOnDestroy(): void {
    this.SUB.unsubscribe()
  }
}
