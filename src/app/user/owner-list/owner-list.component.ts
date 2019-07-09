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

import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { Page } from '../../baseShared/page';
import { SpringPetclinicAngularPage } from '../../../../e2e/app.po';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  page = new Page();
  rows = new Array<any>();
  name: String;
  constructor(private ownerService: OwnerService, private router: Router, ) {
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
    this.ownerService.findByCriteres(this.page, name).subscribe((result: any) => {
      this.page.totalElements = result.count;
      this.rows = result.lignes;


    });
  }
  paginat(event) {

    this.page.pageNumber = event.pageIndex;
    this.page.size = event.pageSize;
    this.setPage(this.page.pageNumber, this.name);
  }
  addUser() {
    this.router.navigate(['/users/add']);
  }
  delete(user) {
    console.log(user);
    this.ownerService.delete(user.id).subscribe(
      data => this.ngOnInit(),
      error => this.ngOnInit()
    );
  }
  search() {
    this.setPage(0, this.name);
  }
}
