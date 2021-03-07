import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/components/layout/header-breadcrumb/header-breadcrumb.module';
import { EmployeesRoutingModule } from 'src/app/components/etudiants/etudiants.routing';
import { EtudiantsComponent } from 'src/app/components/etudiants/etudiants.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    EtudiantsComponent
  ]
})
export class EtudiantsModule { }
