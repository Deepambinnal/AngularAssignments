import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBusComponent } from './components/search-bus/search-bus.component';
import { BusSearchResultComponent } from './components/bus-search-result/bus-search-result.component';


import { routing } from './app.routing';
import { ErrorComponent } from './components/error/error.component';
import { BusService } from './services/bus.service';
import { SelectSeatComponent } from './components/select-seat/select-seat.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PrintComponent } from './components/print/print.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { UploadfileService } from './services/upload-file.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SearchBusComponent,
    ErrorComponent,
    BusSearchResultComponent,
    SelectSeatComponent,
    UserProfileComponent,
    PrintComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [BusService, UserService, UploadfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
