import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { OwnerService } from '../../../user/owner.service';
import { Devise } from '../devise';
import { DeviseService } from '../devise.service';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddDeviseomponent implements OnInit {

  devise: Devise;
  deviseForm = new FormGroup({
    borderaux: new FormControl(''),
    date: new FormControl(''),
    montantTransfer: new FormControl(''),
    frais:new FormControl(''),
    qualiteClient:new FormControl(''),
    user:new FormControl(''),

  });
  users: any;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  constructor(private deviseService: DeviseService, private ownerService: OwnerService, private router: Router, private route: ActivatedRoute) {
    this.devise = new Devise();

  }

  ngOnInit() {
    this.ownerService.findAll().subscribe((result: any) => {
      this.users = result;
      console.log(result);


    });
  }

  onSubmit() {

    this.devise.borderaux = this.deviseForm.get("borderaux").value;
    this.devise.date = this.deviseForm.get("date").value;
    this.devise.montantTransfer = this.deviseForm.get("montantTransfer").value;
    this.devise.frais = this.deviseForm.get("frais").value;
    this.devise.qualiteClient = this.deviseForm.get("qualiteClient").value;
    this.devise.isArchive = false;
    this.devise.refUser = this.deviseForm.get("user").value;
    this.deviseService.saveOrUpdate(this.devise).subscribe(data => {
      console.log("data", data)
      this.router.navigate(['/devise']);
    });

  }
  gotoInList() {
    this.router.navigate(['/devise']);
  }


}
