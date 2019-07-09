import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { OwnerService } from '../../../user/owner.service';
import { EauElectricite } from '../eauelectrecite';
import { EauElectriciteService } from '../eauelectricite.service';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddEauElectriciteComponent implements OnInit {

  eauElectricite: EauElectricite;
  eauElectriciteForm = new FormGroup({
    borderaux: new FormControl(''),
    date: new FormControl(''),
    montantTransfer: new FormControl(''),
    frais: new FormControl(''),
    numFacture: new FormControl(''),
    user:new FormControl(''),

  });
  users: any;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  constructor(private eauElectriciteService: EauElectriciteService, private ownerService: OwnerService, private router: Router, private route: ActivatedRoute) {
    this.eauElectricite = new EauElectricite();

  }

  ngOnInit() {
    this.ownerService.findAll().subscribe((result: any) => {
      this.users = result;
      console.log(result);


    });
  }

  onSubmit() {

    this.eauElectricite.borderaux = this.eauElectriciteForm.get("borderaux").value;
    this.eauElectricite.date = this.eauElectriciteForm.get("date").value;
    this.eauElectricite.montantTransfer = this.eauElectriciteForm.get("montantTransfer").value;
    this.eauElectricite.frais = this.eauElectriciteForm.get("frais").value;
    this.eauElectricite.numFacture = this.eauElectriciteForm.get("numFacture").value;
    this.eauElectricite.isArchive = false;
    this.eauElectricite.refUser = this.eauElectriciteForm.get("user").value;
    this.eauElectriciteService.saveOrUpdate(this.eauElectricite).subscribe(data => {
      console.log("data", data)
      this.router.navigate(['/eauElectricite']);
    });

  }
  gotoInList() {
    this.router.navigate(['/eauElectricite']);
  }


}
