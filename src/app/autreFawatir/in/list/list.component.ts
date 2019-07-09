import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from '../../../baseShared/page';
import { VisitService } from '../../visit.service';
import { InService } from '../in.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListInComponent implements OnInit {

  page = new Page();
  rows = new Array<any>();
  name:String;
  constructor(private router: Router, private inServie: InService) {
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
    this.inServie.findByCriteres(this.page, name).subscribe((result: any) => {
      this.page.totalElements = result.count;
      this.rows = result.lignes;

      
    });
  }
  paginat(event) {

    this.page.pageNumber = event.pageIndex;
    this.page.size = event.pageSize;
    this.setPage(this.page.pageNumber, this.name);
  }
  addIn() {
    this.router.navigate(['/in/add']);
  }
  search(){
    this.setPage(0,this.name);
  }
  delete(user) {
    console.log(user);
    this.inServie.delete(user.id).subscribe(
      data => this.ngOnInit(),
      error=>this.ngOnInit()
      );
  }
}
