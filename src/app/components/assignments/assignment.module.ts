import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app//app.common.module';
import { AssignmentRoutingModule } from 'src/app/components/assignments/assignment.routing';
import { AssignmentComponent } from 'src/app/components/assignments/assignment.component';
import {HeaderBreadCrumbModule} from '../layout/header-breadcrumb/header-breadcrumb.module';
import {MenuModule} from 'primeng';

@NgModule({
  imports: [
    CommonModule,
    AssignmentRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
    MenuModule
  ],
  declarations: [
    AssignmentComponent,
  ]
})
export class AssignmentModule { }
