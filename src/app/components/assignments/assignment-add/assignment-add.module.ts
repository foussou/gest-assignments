import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AssignmentAddComponent} from 'src/app/components/assignments/assignment-add/assignment-add.component';
import {AssignmentAddRoutingModule} from 'src/app/components/assignments/assignment-add/assignment-add.routing';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/components/layout/header-breadcrumb/header-breadcrumb.module';

@NgModule({
  declarations: [
    AssignmentAddComponent
  ],
  imports: [
    CommonModule,
    AssignmentAddRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ]
})
export class AssignmentAddModule { }
