import { Component, OnInit } from '@angular/core';
import { AssignmentDataService } from 'src/app/components/assignments/assignment-data.service';
import { Assignment } from 'src/app/models/assignment.model';
import { RouteStateService } from 'src/app/shared/route-state.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: 'assignment-detail.component.html',
  styleUrls: ['assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  assignmentTransmis: Assignment;

  constructor(
    private assignmentService: AssignmentDataService,
    private routeStateService: RouteStateService) { }

  ngOnInit() {
    var routeStateService = this.routeStateService.getCurrent();
    this.assignmentService.getAssignment(routeStateService.data).subscribe(result => {
      this.assignmentTransmis = result;
      console.log(this.assignmentTransmis);
    });
  }


  getAssignment() {
    // 1 récupérer l'id de l'assignment dans l'URL
    //let id: number = +this.route.snapshot.params.id;
    //console.log('COMPOSANT DETAIL ID = ' + id);

   /* this.assignmentService.getAssignment(id).subscribe((assignment) => {
      //console.log(assignment);
      this.assignmentTransmis = assignment;
    });*/
  }

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;

    this.assignmentService
      .updateAssignment(this.assignmentTransmis)
      .subscribe((message) => {
        console.log(message);

        // on retourne à la page d'accueil
        this.routeStateService.loadPrevious();
      });
  }

  onDelete() {
    this.assignmentService
      .deleteAssignment(this.assignmentTransmis)
      .subscribe((reponse) => {
        console.log(reponse.message);
        this.assignmentTransmis = null;

        // on retourne à la page d'accueil
        this.routeStateService.loadPrevious();
      });
  }

  onClickEdit() {
      this.routeStateService.add('Edit Assignment', 'main/assignments/assignments-edit', this.assignmentTransmis.id, false);
  }


  back(){
    this.routeStateService.loadPrevious();
  }
}
