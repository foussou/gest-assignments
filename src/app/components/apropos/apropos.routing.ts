import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AproposComponent } from 'src/app/components/apropos/apropos.component';

const routes: Routes = [
    {
        path: '',
        component: AproposComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutUsRoutingModule { }
