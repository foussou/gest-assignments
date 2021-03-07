import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastService } from 'src/app/shared/toast.service';
import { birthDateValidator } from 'src/app/validators/birthdate.validators';
import { UserDataService } from 'src/app/shared/user-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-user',
  templateUrl: 'inscription-etudiant.component.html',
  styleUrls: ['inscription-etudiant.component.css']
})
export class InscriptionEtudiantComponent implements OnInit {

  userform: FormGroup;

  name: string;

  emailId: string;

  password: string;

  version: string;

  constructor(private userService: UserDataService, private router: Router, private fb: FormBuilder, private toastService: ToastService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'name': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'emailId': new FormControl('', [Validators.required, Validators.email]),
    });

    this.version = environment.version;
  }

  onClickRegisterUser() {
    const isRegistered: boolean = this.userService.addUser(this.userform.controls["name"].value,
      this.userform.controls["password"].value,
      this.userform.controls["emailId"].value);
    if (isRegistered) {
      this.router.navigate(['/connexion']);
      this.toastService.addSingle("Inscris avec succès", "", "Inscription.")
    }
  }

  onClickGoToLogin() {
    this.router.navigate(['/connexion']);
  }

}

