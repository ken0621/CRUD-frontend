import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

import { FamilyRegisterComponent } from '../family-register/family-register.component';
import { FrontComponent } from '../front/front.component';
import { FamilyListComponent } from '../family-list/family-list.component';
import { SimpleModalModule } from 'ngx-simple-modal';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: FrontComponent },
      { path: 'family/register', component: FamilyRegisterComponent },
      { path: 'family/list', component: FamilyListComponent },
    ]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
    SimpleModalModule.forRoot({container:document.body})],
  
    exports: [RouterModule],
  declarations: []
})
export class FamilyRoutingModule { }
