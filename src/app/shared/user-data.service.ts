import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
/**
 * user service class
 */
export class UserDataService {

    users: User[] = [];

    constructor(private http: HttpClient) {
        let user = {
            userId: 1, userName: "fousseny", password: "password", emailId: "fousseny03@gmail.com"
        };
        this.users.push(user);
    }
/*
  connexion(data): Observable<any> {
    return this.http.post('https://api-jwt-nodejs.herokuapp.com/api/auth/connexion', data)
  }
*/
    /**
     * get user by user name and password
     * @param userName
     * @param password
     */
    /*getUserByUserNameAndPassword(data): User {
        let user: User = null;
        this.users.forEach(element => {
            if (element.emailId === data.email && element.password === data.password) {
                user = element;
            }
        });
        return user;
    }*/

    login(data): Observable<any> {
      return this.http.post('https://api-jwt-nodejs.herokuapp.com/api/auth/connexion', data);
    }

    getUser(token): Observable<any> {
      return this.http.get('https://api-jwt-nodejs.herokuapp.com/api/auth/recherche');
    }

    /**
     * add new user
     * @param userName
     * @param password
     * @param emailId
     */
    addUser(userName: string, password: string, emailId: string): boolean {
        let userId = this.users.length + 1;
        let user = new User();
        user.userId = userId;
        user.userName = userName;
        user.password = password;
        user.emailId = emailId;
        this.users.push(user);
        return true;
    }
}
