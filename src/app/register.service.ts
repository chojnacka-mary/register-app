import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { isNull, isUndefined } from 'lodash';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class RegisterService {

  constructor(private _http: HttpClient) { }

  createUser(user) {
    const body = JSON.stringify(user);
    const req = this._http.post('https://foodsi-stage.applover.pl/api/v1/auth', body, httpOptions)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occurred');
        }
      );
  }

}
