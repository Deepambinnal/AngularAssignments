import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBusComponent } from './components/search-bus/search-bus.component';
import { BusSearchResultComponent } from './components/bus-search-result/bus-search-result.component';
import { ErrorComponent } from './components/error/error.component';
import { SelectSeatComponent } from './components/select-seat/select-seat.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PrintComponent } from './components/print/print.component';
import { LoginComponent } from './components/login/login.component';

const routes : Routes = [
    { path:"", component: LoginComponent },
    { path:"searchBus", component: SearchBusComponent },
    { path:"busSearch", component: BusSearchResultComponent, 
        children:[
            { path:"selectSeat/:id", component: SelectSeatComponent }
        ] },
    { path:"userProfile", component: UserProfileComponent },
    { path:"print", component: PrintComponent },
    { path:"**", component: ErrorComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);