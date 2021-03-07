import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionEtudiantComponent } from 'src/app/components/inscription-etudiant/inscription-etudiant.component';
import { InscriptionEtudiantRoutingModule } from 'src/app/components/inscription-etudiant/inscription-etudiant.routing';
import { AppCommonModule } from 'src/app/app.common.module';

@NgModule({
  imports: [
    CommonModule,
    InscriptionEtudiantRoutingModule,
    AppCommonModule
  ],
  declarations: [InscriptionEtudiantComponent]
})
export class InscriptionEtudiantModule { }
