import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/shared/user-data.service';
import { User } from 'src/app/models/user.model';
import { ToastService } from 'src/app/shared/toast.service';
import { RouteStateService } from 'src/app/shared/route-state.service';
import { SessionService } from 'src/app/shared/session.service';
import { TranslateService } from '@ngx-translate/core';
import { UserContextService } from 'src/app/shared/user-context.service';
import { environment } from 'src/environments/environment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'connexion.component.html',
  styleUrls: ['connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  userName: string;

  password: string;

  locale: string;

  version: string;

  formGroup: FormGroup;

  constructor(
    private userService: UserDataService,
    private toastService: ToastService,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    public translate: TranslateService,
    private userContextService: UserContextService
  ) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onClickLogin() {
    if (this.formGroup.valid) {
      let user: User;

        this.userService.login(this.formGroup.value).subscribe(result => {
          if (result.auth === true){
            console.log(result);
            user = {
              userId: 1, userName: "", password: "", emailId: this.formGroup.value.email
            };
            this.userContextService.setUser(user);
            this.routeStateService.add('Dashboard', '/main/dashboard', null, true);
            return;
          } else {
            this.toastService.addSingle('error', '', 'Email ou mot de passe incorrect.');
            return;
          }
      });
      /*
      console.log(user);
      if (user) {
        this.userContextService.setUser(user);
        this.routeStateService.add('Dashboard', '/main/dashboard', null, true);
        return;
      } else {
        this.toastService.addSingle('error', '', 'Email ou mot de passe incorrect.');
        return;
      }*/
    } else {
      this.toastService.addSingle('error', '', 'Email ou mot de passe incorrect.');
      return;
    }
  }
}
