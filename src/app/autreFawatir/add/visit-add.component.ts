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
import { VisitService } from '../visit.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AutreFawatir } from '../visit';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-visit-add',
  templateUrl: './visit-add.component.html',
  styleUrls: ['./visit-add.component.css']
})
export class VisitAddComponent implements OnInit {
  autreFawatir: AutreFawatir; 
  autreFawatirForm = new FormGroup({
    borderaux: new FormControl(''),
    date: new FormControl(''),
    montantTransfer: new FormControl(''),
    frais:new FormControl(''),
    refPaiement:new FormControl('')

  });

  constructor(private visitService: VisitService, private router: Router, private route: ActivatedRoute) {
    this.autreFawatir = new AutreFawatir();

  }

  ngOnInit() {

  }
  
  onSubmit() {
    this.autreFawatir.borderaux = this.autreFawatirForm.get("borderaux").value;
    this.autreFawatir.date = this.autreFawatirForm.get("date").value;
    this.autreFawatir.montantTransfer=this.autreFawatirForm.get("montantTransfer").value;
    this.autreFawatir.frais=this.autreFawatirForm.get("frais").value;
    this.autreFawatir.refPaiement=this.autreFawatirForm.get("refPaiement").value;
    this.autreFawatir.isArchive=false;
    console.log("autreFawatir",this.autreFawatir);
    this.visitService.saveOrUpdate(this.autreFawatir).subscribe(data => {
      console.log("data",data)
      this.router.navigate(['/autreFawatir']);
    });
  }
  gotoAutreFawatirList(){
    this.router.navigate(['/autreFawatir']);
  }

}
  


