import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListRoutingModule } from 'src/app/components/assignments/assignment-list/assignment-list.routing';
import { AssignmentListComponent } from 'src/app/components/assignments/assignment-list/assignment-list.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/components/layout/header-breadcrumb/header-breadcrumb.module';
import {DynamicDialogModule} from 'primeng';

@NgModule({
  imports: [
    CommonModule,
    DepartmentListRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
    DynamicDialogModule,
  ],
  declarations: [
    AssignmentListComponent
  ]
})
export class AssignmentListModule { }
