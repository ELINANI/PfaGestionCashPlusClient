/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

/**
 * @author Vitaliy Fedoriv
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VisitListComponent} from './list/visit-list.component';
import {VisitEditComponent} from './visit-edit/visit-edit.component';
import {VisitAddComponent} from './add/visit-add.component';
import { ListAutreTransactionComponent } from './autrTransaction/list/list.component';
import { AddAutreTransactionComponent } from './autrTransaction/add/add.component';
import { ListInComponent } from './in/list/list.component';
import { AddInComponent } from './in/add/add.component';
import { ListOutComponent } from './out/list/list.component';
import { AddOutComponent } from './out/add/add.component';
import { ListEauElectriciteComponent } from './eauelectricite/list/list.component';
import { AddEauElectriciteComponent } from './eauelectricite/add/add.component';
import { ListDeviseComponent } from './devise/list/list.component';
import { AddDeviseomponent } from './devise/add/add.component';

const visitRoutes: Routes = [
  {path: 'autreFawatir', component: VisitListComponent},
  {path: 'autreFawatir/add', component: VisitAddComponent},
  {path: 'autreTransaction', component: ListAutreTransactionComponent},
  {path: 'autreTransaction/add', component: AddAutreTransactionComponent},
  {path: 'in', component: ListInComponent},
  {path: 'in/add', component: AddInComponent},
  {path: 'out', component: ListOutComponent},
  {path: 'out/add', component: AddOutComponent},
  {path: 'eauElectricite', component: ListEauElectriciteComponent},
  {path: 'eauElectricite/add', component: AddEauElectriciteComponent},
  {path: 'devise', component: ListDeviseComponent},
  {path: 'devise/add', component: AddDeviseomponent},
];


@NgModule({
  imports: [
    RouterModule.forChild(visitRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VisitsRoutingModule {
}
