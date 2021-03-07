import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EtudiantDataService } from 'src/app/components/etudiants/etudiant-data.service';
import { Employee } from 'src/app/models/etudiant.model';
import { RouteStateService } from 'src/app/shared/route-state.service';
import {AssignmentDataService} from '../assignments/assignment-data.service';
import {Assignment} from '../../models/assignment.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: 'etudiants.component.html',
  styleUrls: ['etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  columns: any[];

  assignments: Observable<Assignment[]>;

  employees: Employee[];

  pageSize: number;


  constructor(
    private assignmentService: AssignmentDataService,
    private routeStateService: RouteStateService) { }

  ngOnInit() {
    this.pageSize = 10;

    this.columns = [
      { field: 'Nom', header: 'Nom' },
      { field: 'Matiere', header: 'Matiere' },
      { field: 'Professeur', header: 'Professeur' },
      { field: 'Note', header: 'Note' }
    ];

    this.assignments = this.assignmentService.getAllAssignments();
  }

  goToDepartmentDetails(department: number) {
    //this.routeStateService.add("Department details", "/main/assignments/assignments-detail", department, false);
  }
}
