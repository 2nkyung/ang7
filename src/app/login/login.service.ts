import { Injectable } from '@angular/core';
import { User } from './user';
import {ajax} from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl:string = 'http://localhost:88/';
  constructor() { }

  doLogin(us:User){
    return ajax.post(this.baseUrl + 'login',
    {'uiId':us.uiId,'uiPwd':us.uiPwd},
    {'Content-Type':'application/json',
      'rxjs-custom-header':'Rxjs'});
  }
}