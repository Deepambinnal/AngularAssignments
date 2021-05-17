import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

const routes : Routes = [
    { path:"", component: LoginComponent },
    { path:"searchBus", loadChildren: () => import('./components/search-bus/search-bus.module').then(mod => mod.SearchBusModule)},
    { path:"busSearch", loadChildren: () => import('./components/bus-search-result/bus-search-result.module').then(mod => mod.BusSearchResultModule), },
    { path:"userProfile", loadChildren: () => import('./components/user-profile/user-profile.module').then(mod => mod.UserProfileModule) },
    { path:"print", loadChildren: () => import('./components/print/print.module').then(mod => mod.PrintModule)},
    { path:"**", loadChildren: () => import('./components/error/erro.module').then(mod => mod.ErrorModule)}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes) 
    ],
    exports: [
        RouterModule
    ]
})
export class routing {}