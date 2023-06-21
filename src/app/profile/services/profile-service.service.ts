import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private _HttpClient:HttpClient) { }

  getCountries(Country:string):Observable<any>
  {
    return this._HttpClient.get(`https://anchormt-world-staging-at4dfab73a-lz.a.run.app/countries/${Country}`)
  }

  getAllCountries():Observable<any>
  {
    return this._HttpClient.get(`https://anchormt-world-staging-at4dfab73a-lz.a.run.app/countries`)
  }
}
