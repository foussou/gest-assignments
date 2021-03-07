import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentDetailComponent } from 'src/app/components/assignments/assignment-detail/assignment-detail.component';

const routes: Routes = [
    {
        path: '',
        component: AssignmentDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AssignmentDetailRoutingModule { }
