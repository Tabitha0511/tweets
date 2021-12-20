import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  constructor(private http: HttpClient) {}
  accessToken =
    'Bearer AAAAAAAAAAAAAAAAAAAAAAnmXAEAAAAAnlr3RFGe7956JOac2LiphPW3uZ0%3DhNix6xBp6ffKfE9kbFQkczawaASdmXmQiERz3JEI4pbaFe3bYp';

  getTweets(): any {
    try {
      this.http.get(`${environment.baseURL}?query=football`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: this.accessToken,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      });

      this.http.get(`${environment.baseURL}?query=politics`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: this.accessToken,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      });
    } catch (e) {
      console.log(e);
    }

    this.http.get(`${environment.baseURL}?query=bollywood`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.accessToken,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    });

    this.http.get(`${environment.baseURL}?query=trends`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.accessToken,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    });

    this.http.get(`${environment.baseURL}?query=fashion`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.accessToken,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    });
  }
}
