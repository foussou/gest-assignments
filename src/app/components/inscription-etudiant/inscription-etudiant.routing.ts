import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionEtudiantComponent } from 'src/app/components/inscription-etudiant/inscription-etudiant.component';


const routes: Routes = [
    {
        path: '',
        component: InscriptionEtudiantComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InscriptionEtudiantRoutingModule { }
