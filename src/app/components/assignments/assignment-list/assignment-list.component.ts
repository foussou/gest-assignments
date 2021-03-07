import {Component, OnDestroy, OnInit} from '@angular/core';
import { AssignmentDataService } from 'src/app/components/assignments/assignment-data.service';
import { Router } from '@angular/router';
import {RouteStateService} from '../../../shared/route-state.service';
import {Assignment} from '../../../models/assignment.model';
import {Observable} from 'rxjs';
import {DialogService, DynamicDialogRef} from 'primeng';
import {MessageService, SelectItem} from 'primeng/api';
import {AssignmentDetailComponent} from '../assignment-detail/assignment-detail.component';
import {AssignmentAddComponent} from '../assignment-add/assignment-add.component';

@Component({
  selector: 'app-department-list',
  templateUrl: 'assignment-list.component.html',
  styleUrls: ['assignment-list.component.scss'],
  providers: [DialogService, MessageService]
})
export class AssignmentListComponent implements OnInit, OnDestroy {

  columns: any[];

  assignments: Assignment[];

  assignmentSelectionne: Assignment;

  ref: DynamicDialogRef;
  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;
  sortKey: any;

  constructor(private assignmentService: AssignmentDataService,
              private routeStateService: RouteStateService,
              public dialogService: DialogService,
              public messageService: MessageService,
              ) {

    this.columns = [
      { field: 'Matiere', header: 'Matiere' },
      { field: 'Auteur', header: 'Auteur' }];
  }

  ngOnInit() {
    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];
    //this.primengConfig.ripple = true;

    this.assignmentService.getAllAssignments().subscribe((assignements) => {
      // on ne rentre ici que quand les données sont prêtes
      // par ex, le service peut utiliser une BD distance et des WebService
      // pour récupérer les données..
      this.assignments = assignements;
      console.log('Données reçues...');
    });
  }

  goToAssignmentDetails(a: String) {
    //this.routeStateService.add("Assignment details", "main/assignments/assignments-detail", null, false);
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

  assignmentClique(a: Assignment) {
    console.log('Assignment cliqué : ' + a.matiere);
    this.assignmentSelectionne = a;
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  voirDetail(id: number) {

    this.routeStateService.add("Assignment details", "main/assignments/assignments-detail", id, false);
    console.log('ffffffff');
  }
}
