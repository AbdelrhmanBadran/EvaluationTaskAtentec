import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor() { }

  RegisterForm:BehaviorSubject<any> = new BehaviorSubject(null)
  profileUser:BehaviorSubject<any> = new BehaviorSubject(null)
}
