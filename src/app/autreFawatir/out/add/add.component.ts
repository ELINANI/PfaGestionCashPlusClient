import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { OwnerService } from '../../../user/owner.service';
import { Out } from '../out';
import { OutService } from '../out.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddOutComponent implements OnInit {

  out: Out; 
  outForm = new FormGroup({
    borderaux: new FormControl(''),
    date: new FormControl(''),
    montantTransfer: new FormControl(''),
    frais:new FormControl(''),
    user:new FormControl(''),
  

  });
users:any;
  
  constructor(private outService: OutService, private ownerService:OwnerService,private router: Router, private route: ActivatedRoute) {
    this.out = new Out();

  }

  ngOnInit() {
    this.ownerService.findAll().subscribe((result: any) => {
      this.users=result;
      console.log(result);

      
    });
  }
  
  onSubmit() {
   this.out.borderaux = this.outForm.get("borderaux").value;
    this.out.date = this.outForm.get("date").value;
    this.out.montantTransfer=this.outForm.get("montantTransfer").value;
    this.out.frais=this.outForm.get("frais").value;
    this.out.isArchive=false;
   this.out.refUser=this.outForm.get("user").value;
    this.outService.saveOrUpdate(this.out).subscribe(data => {
      console.log("data",data)
      this.router.navigate(['/out']);
    });
   
  }
  gotooutList(){
    this.router.navigate(['/out']);
  }


}
