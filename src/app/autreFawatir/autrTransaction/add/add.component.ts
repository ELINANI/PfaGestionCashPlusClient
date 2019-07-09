import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AutreTransactionService } from '../autreTransaction.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AutreTransaction } from '../autreTransactions';
import { OwnerService } from '../../../user/owner.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddAutreTransactionComponent implements OnInit {

  autreTransaction: AutreTransaction; 
  autreTransactionForm = new FormGroup({
    borderaux: new FormControl(''),
    date: new FormControl(''),
    montantTransfer: new FormControl(''),
    infos:new FormControl(''),
    user:new FormControl(''),
  

  });
users:any;
 
  constructor(private visitService: AutreTransactionService, private ownerService:OwnerService,private router: Router, private route: ActivatedRoute) {
    this.autreTransaction = new AutreTransaction();

  }

  ngOnInit() {
    this.ownerService.findAll().subscribe((result: any) => {
      this.users=result;
      console.log(result);

      
    });
  }
  
  onSubmit() {
   this.autreTransaction.borderaux = this.autreTransactionForm.get("borderaux").value;
    this.autreTransaction.date = this.autreTransactionForm.get("date").value;
    this.autreTransaction.montantTransfer=this.autreTransactionForm.get("montantTransfer").value;
    this.autreTransaction.infos=this.autreTransactionForm.get("infos").value;
    this.autreTransaction.isArchive=false;
   this.autreTransaction.refUser=this.autreTransactionForm.get("user").value;
    this.visitService.saveOrUpdate(this.autreTransaction).subscribe(data => {
      console.log("data",data)
      this.router.navigate(['/autreTransaction']);
    });
    console.log(this.autreTransactionForm.get("user").value);
  }
  gotoAutreFawatirList(){
    this.router.navigate(['/autreTransaction']);
  }


}
