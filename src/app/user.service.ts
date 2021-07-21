import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { isDevMode } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService
{
    public oauthUrl = "/oauth/token";
    public usersUrl = "/api/user_data";
    public secretUrl = "/api/client_secret";
    public domain = "";

    constructor(private http: HttpClient)
    {
      
        if(isDevMode())
        {
            this.domain = "http://familylist.test";
        }
        else
        {
        }
    }

    getClientSecret()
    {
        var headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });

        return this.http.get(this.domain + this.secretUrl,
        {
            headers: headers
        });
    }

    getAccessToken(email: any, password: any, secret: any)
    {
        var headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });

        var postData =
        {
            grant_type: "password",
            client_id: 2,
            client_secret: secret,
            username: email,
            password: password,
            scope: "",
        }

        return this.http.post(this.domain + this.oauthUrl, JSON.stringify(postData),
        {
            headers: headers
        });
    }

    getUserData(accessToken: string): Observable<User[]>
    {
        var headers = new HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + accessToken,
        });

        return this.http.get<User[]>(this.domain + this.usersUrl,
        {
            headers: headers
        });
    }
}
