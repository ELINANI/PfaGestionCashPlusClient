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

import {Component, OnInit, Input} from '@angular/core';
//import {Visit} from '../visit';
import {VisitService} from '../visit.service';
import {Router} from '@angular/router';
import { Page } from '../../baseShared/page';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit {

  //@Input() visits: Visit[];
  response_status: number;
  no_visits: boolean = false;
  errorMessage: string;
  page = new Page();
  rows = new Array<any>();
  name:String;
  constructor(private router: Router, private visitService: VisitService) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit() {
    this.setPage(0, "");
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(page, name) {
    this.page.pageNumber = page;
    this.visitService.findByCriteres(this.page, name).subscribe((result: any) => {
      this.page.totalElements = result.count;
      this.rows = result.lignes;

      
    });
  }
  paginat(event) {

    this.page.pageNumber = event.pageIndex;
    this.page.size = event.pageSize;
    this.setPage(this.page.pageNumber, this.name);
  }
  addAutreFawatir() {
    this.router.navigate(['/autreFawatir/add']);
  }
  search(){
    this.setPage(0,this.name);
  }
  delete(user) {
    console.log(user);
    this.visitService.delete(user.id).subscribe(
      data => this.ngOnInit(),
      error=>this.ngOnInit()
      );
  }

}
