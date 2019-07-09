import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { OwnerService } from '../../../user/owner.service';
import { In } from '../in';
import { InService } from '../in.service';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddInComponent implements OnInit {

  in: In; 
  inForm = new FormGroup({
    borderaux: new FormControl(''),
    date: new FormControl(''),
    montantTransfer: new FormControl(''),
    sms:new FormControl(''),
    frais:new FormControl(''),
    user:new FormControl(''),
  

  });
users:any;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(private inService: InService, private ownerService:OwnerService,private router: Router, private route: ActivatedRoute) {
    this.in = new In();

  }

  ngOnInit() {
    this.ownerService.findAll().subscribe((result: any) => {
      this.users=result;
      console.log(result);

      
    });
  }
  
  onSubmit() {
    this.in.id=null;
   this.in.borderaux = this.inForm.get("borderaux").value;
    this.in.date = this.inForm.get("date").value;
    this.in.montantTransfer=this.inForm.get("montantTransfer").value;
    this.in.sms=this.inForm.get("sms").value;
    this.in.frais=this.inForm.get("frais").value;
    this.in.isArchive=false;
   this.in.refUser=this.inForm.get("user").value;
    this.inService.saveOrUpdate(this.in).subscribe(data => {
      console.log("data",data)
      this.router.navigate(['/in']);
    });
   
  }
  gotoInList(){
    this.router.navigate(['/in']);
  }


}
