import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from 'src/app/components/connexion/connexion.component';
import { LoginRoutingModule } from 'src/app/components/connexion/connexion.routing';
import { AppCommonModule } from 'src/app/app.common.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    AppCommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    })
  ],
  declarations: [ConnexionComponent],
  exports: [TranslateModule]
})
export class ConnexionModule { }
