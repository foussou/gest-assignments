import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantsComponent } from 'src/app/components/etudiants/etudiants.component';

const routes: Routes = [
    {
        path: '',
        component: EtudiantsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeesRoutingModule { }
