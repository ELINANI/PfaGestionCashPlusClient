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

import {VisitsRoutingModule} from './visits-routing.module';
import {CommonModule} from '@angular/common';
import {VisitListComponent} from './list/visit-list.component';
import {VisitEditComponent} from './visit-edit/visit-edit.component';
import {NgModule} from '@angular/core';
import {VisitService} from './visit.service';
import {VisitAddComponent} from './add/visit-add.component';


import {MatMomentDateModule, MomentDateAdapter} from '@angular/material-moment-adapter';
import {MatDatepickerModule} from '@angular/material';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddAutreTransactionComponent } from './autrTransaction/add/add.component';

import { ListAutreTransactionComponent } from './autrTransaction/list/list.component';
import { AutreTransactionService } from './autrTransaction/autreTransaction.service';
import { AddInComponent } from './in/add/add.component';
import { ListInComponent } from './in/list/list.component';
import { InService } from './in/in.service';
import { AddOutComponent } from './out/add/add.component';
import { ListOutComponent } from './out/list/list.component';
import { OutService } from './out/out.service';
import { AddEauElectriciteComponent } from './eauelectricite/add/add.component';
import { ListEauElectriciteComponent } from './eauelectricite/list/list.component';
import { EauElectriciteService } from './eauelectricite/eauelectricite.service';
import { DeviseService } from './devise/devise.service';
import { AddDeviseomponent } from './devise/add/add.component';
import { ListDeviseComponent } from './devise/list/list.component';
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD',
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'MM YYYY',
  },
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    VisitsRoutingModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  declarations: [
    VisitListComponent,
    VisitEditComponent,
    VisitAddComponent,
    AddAutreTransactionComponent,
    ListAutreTransactionComponent,
    AddInComponent,
    ListInComponent,
    AddOutComponent,
    ListOutComponent,
    AddEauElectriciteComponent,
    ListEauElectriciteComponent,
    AddDeviseomponent,
    ListDeviseComponent
  
  ],
  exports: [
    VisitListComponent,
    VisitEditComponent,
    VisitAddComponent
  ],
  providers: [
    VisitService,
    AutreTransactionService,
    InService,
    OutService,
    EauElectriciteService,
    DeviseService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS}
  ]
})
export class VisitsModule {
}
