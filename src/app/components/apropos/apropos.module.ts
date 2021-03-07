import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from 'src/app/components/apropos/apropos.routing';
import { AproposComponent } from 'src/app/components/apropos/apropos.component';
import { AppCommonModule } from 'src/app//app.common.module';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    AppCommonModule
  ],
  declarations: [AproposComponent]
})
export class AproposModule { }
