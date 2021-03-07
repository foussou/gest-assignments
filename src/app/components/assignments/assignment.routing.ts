import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from 'src/app/components/assignments/assignment.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'assignments-list'
    },
    {
        path: 'assignments-list',
        component: AssignmentComponent,
        loadChildren: () => import('src/app/components/assignments/assignment-list/assignment-list.module').then(m => m.AssignmentListModule)
    },
    {
        path: 'assignments-detail',
        component: AssignmentComponent,
        loadChildren: () => import('src/app/components/assignments/assignment-detail/assignment-detail.module').then(m => m.AssignmentDetailModule)
    },
    {
        path: 'assignments-add',
        component: AssignmentComponent,
        loadChildren: () => import('src/app/components/assignments/assignment-add/assignment-add.module').then(m => m.AssignmentAddModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AssignmentRoutingModule { }
