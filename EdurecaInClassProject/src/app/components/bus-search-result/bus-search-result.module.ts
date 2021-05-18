import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { BusSearchResultComponent } from './bus-search-result.component';
import { BusSearchResultRoutingModule } from './bus-search-result-routing.module';
import { SelectSeatComponent } from '../select-seat/select-seat.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }

@NgModule({
  imports: [
    CommonModule,
    BusSearchResultRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  exports: [
    BusSearchResultComponent
  ],
  declarations: [
    BusSearchResultComponent,
    SelectSeatComponent
  ],
  providers: [
  ],
})
export class BusSearchResultModule { }