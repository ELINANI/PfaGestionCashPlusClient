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

import { Router } from '@angular/router';
import { User } from '../owner';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {

  user: User;
  errorMessage: string;
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    role: new FormControl('')
  });
  constructor(private ownerService: OwnerService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.user.firstName = this.userForm.get("firstName").value;
    this.user.lastName = this.userForm.get("lastName").value;
    this.user.login="fkkfk";
    this.user.password="****";
    console.log("user befor",this.user);
    this.ownerService.saveOrUpdate(this.user).subscribe(data => {
      this.router.navigate(['/owners']);
    });
  }

  gotoOwnersList() {
    this.router.navigate(['/owners']);
  }

}
