import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from 'src/app/components/layout/layout.component';
import {AuthGuard} from './shared/auth.gaurd';

const appRoutes: Routes = [
    {
        path: 'connexion',
        loadChildren: () => import('src/app/components/connexion/connexion.module').then(m => m.ConnexionModule)
    },
    {
        path: 'register',
        loadChildren: () => import('src/app/components/inscription-etudiant/inscription-etudiant.module').then(m => m.InscriptionEtudiantModule)
    },
    {
        path: 'main',
        component: LayoutComponent,
        children: [{
            path: 'dashboard',
            loadChildren: () => import('src/app/components/dashboard/dashboard.module').then(m => m.DashboardModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'assignments',
            loadChildren: () => import('src/app/components/assignments/assignment.module').then(m => m.AssignmentModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'etudiants',
            loadChildren: () => import('src/app/components/etudiants/etudiants.module').then(m => m.EtudiantsModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'apropos',
            loadChildren: () => import('src/app/components/apropos/apropos.module').then(m => m.AproposModule),
            canActivate: [AuthGuard]
        }
        ]
    },
    {
        path: '',
        redirectTo: 'connexion',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
