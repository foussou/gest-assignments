import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentDetailRoutingModule } from 'src/app/components/assignments/assignment-detail/assignment-detail.routing';
import { AssignmentDetailComponent } from 'src/app/components/assignments/assignment-detail/assignment-detail.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/components/layout/header-breadcrumb/header-breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    AssignmentDetailRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    AssignmentDetailComponent
  ]
})
export class AssignmentDetailModule { }
