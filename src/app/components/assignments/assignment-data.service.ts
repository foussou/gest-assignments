import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Assignment} from '../../models/assignment.model';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AssignmentDataService {

  url = 'https://api-assignments.herokuapp.com/api/assignments';

    constructor(private http: HttpClient) {

    }

    getAllAssignments(): Observable<Assignment[]> {
      console.log('Dans getAssignments dans le service...');
      return this.http.get<Assignment[]>(this.url);
    }

  getAssignment(id: number): Observable<Assignment> {
    console.log('Dans getAssignment dans le service id=' + id);
    console.log('Assignment id=' + id, 'a été recherché');

    /*
    let assignmentTrouve: Assignment;

    this.assignments.forEach((a, index) => {
      if (a.id === id) {
        console.log("Assignment trouvé à l'index " + index);
        assignmentTrouve = a;
      }
    });
    return of(assignmentTrouve);
*/

    return this.http.get<Assignment>(this.url + '/' + id);
    /*
    .pipe(
      map((a) => {
        a.nom += ' MODIFIE';
        return a;
      }),
      map((a) => {
        a.nom += ' MODIFIE2 ';
        return a;
      }),
      tap((a) => {
        console.log(' ici une trace pour le debug :' + a.nom);
      }),
      catchError(this.handleError<any>('getAssignments'))
    );
    */
  }
  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);

      return of(result as T);
    };
  }

  addAssignment(assignment: Assignment): Observable<any> {
    // this.assignments.push(assignment);
    console.log(assignment.matiere, 'a été ajouté');

    return this.http.post(this.url, assignment);
  }

  updateAssignment(assignment: Assignment): Observable<any> {
    /*
    this.assignments.forEach((a, index) => {
      if (a === assignment) {
        this.assignments[index] = a;
      }
    });
    */
    console.log(assignment.matiere, 'a été mis à jour');

    return this.http.put(this.url, assignment);
  }

  deleteAssignment(assignment: Assignment): Observable<any> {
    /*
    this.assignments.forEach((a, index) => {
      if (a === assignment) {
        // suppression d'un élément du tableau
        // splice(position, nb elements à supprimer)
        this.assignments.splice(index, 1);
      }
    });
    */
    console.log(assignment.matiere, 'a été supprimé');

    return this.http.delete(this.url + '/' + assignment._id);
  }
}
