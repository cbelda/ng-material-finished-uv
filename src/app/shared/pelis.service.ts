import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PelisService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get('http://localhost:3000/users/5ad865baef5ced16b76ab12b');
  }

}
