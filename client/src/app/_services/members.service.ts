import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // getHTTPOptions() {
  //   let currentUser = localStorage.getItem('user');

  //   if (currentUser) {
  //     const httpOptions = {
  //       headers: new HttpHeaders({
  //         Authorization: 'Bearer ' + JSON.parse(currentUser).token
  //       })
  //     }
  //     return httpOptions;
  //   }
  //   return {};
  // }

  getMembers() {
    // const httpOptions = this.getHTTPOptions();

    return this.http.get<Member[]>(this.baseUrl + 'users');
  }

  getMember(username: string) {
    // const httpOptions = this.getHTTPOptions();

    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }
}
