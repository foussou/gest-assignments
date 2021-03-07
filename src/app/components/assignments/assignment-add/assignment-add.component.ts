import { Component, OnInit } from '@angular/core';
import {MenuItem, SelectItem} from 'primeng/api';
import {Assignment} from '../../../models/assignment.model';
import {AssignmentDataService} from '../assignment-data.service';
import {RouteStateService} from '../../../shared/route-state.service';

@Component({
  selector: 'app-assignment-add',
  templateUrl: './assignment-add.component.html',
  styleUrls: ['./assignment-add.component.css']
})
export class AssignmentAddComponent implements OnInit {
  Choixmatieres: SelectItem[];
  selectedMatiere: SelectItem;
  Choixprofs: SelectItem[];
  selectedProf: SelectItem;
  matiere = '';
  dateDeRendu: Date = null;
  auteur = '';
  note: number;
  nomprof: string;
  photo: string;
  rendu: boolean;



  constructor(private assignmentService: AssignmentDataService,private routeStateService: RouteStateService) {
    this.Choixmatieres = [
      {label: 'Angular', value: 'Angular'},
      {label: 'Grails', value: 'Grails'},
      {label: 'Datascience avec R', value: 'Datascience avec R'},
      {label: 'Java JEE', value: 'Java JEE'},
      {label: 'SQL', value: 'SQL'},
      {label: 'Hadoop', value: 'Hadoop'},
    ];

    this.Choixprofs = [
      {label: 'Michel Buffa', value: 'Michel Buffa'},
      {label: 'Gregory', value: 'Galli'},
      {label: 'Alison Temin', value: 'Alison Temin'},
      {label: 'Amosse Edouard', value: 'Amosse Edouard'},
      {label: 'Gabriel Mopolo', value: 'Gabriel Mopolo'},
      {label: 'Sergio Simonian', value: 'Sergio Simonian'},
    ];
  }

  onSubmit() {
    // evite la soumission standard du formulaire, qui génère un warning
    // dans la console...
    event.preventDefault();

    console.log(
      'Dans submit nom = ' + this.matiere + ' date = ' + this.dateDeRendu
    );
    const newAssignment = new Assignment();
    newAssignment.id = Math.floor(Math.random() * 1000000);
    newAssignment.matiere = this.matiere;
    newAssignment.nomprof = this.nomprof;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.auteur = this.auteur;
    newAssignment.note = this.note;
    newAssignment.rendu = this.rendu;
    newAssignment.photo = this.photo;


    // on va utiliser directement le service
    this.assignmentService
      .addAssignment(newAssignment)
      .subscribe((reponse) => {
        console.log(reponse.message);

        // il va falloir naviguer de nouveau vers la page d'accueil
        // on va devoir faire l'équivalent du routerLink="/home" mais
        // par programme...
        // on retourne à la page d'accueil
        this.routeStateService.add('Add Assignment', 'main/dashboard', null, false);

      });
  }

  ngOnInit() {

  }


  onClickRegisterUser() {

  }

  onClick() {

  }
}
