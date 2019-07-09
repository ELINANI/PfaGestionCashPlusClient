import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RequestOptions } from "@angular/http";
import { Page } from "../baseShared/page";
import { GlobalConstant } from "../app.global.constants";

@Injectable()
export class CrudService<T> {

  protected url: String;
  protected headers: any;
  protected options: any;

  constructor(private http: HttpClient) {
    this.headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  public findByCriteres(page: Page, name) {
    return this.http.get(this.url + '/find-by-critere?page=' + page.pageNumber + "&&size=" + page.size + "&&name=" + name, this.options);
  }

  public saveOrUpdate(model: T) {

    return this.http.post(this.url + '/save-or-update', model, this.options);
  }
  public delete(id){
    return this.http.get(this.url + '/delete?id='+id, this.options);
  }
  
  public findAll() {
    return this.http.get(this.url + '/find-all', this.options);
  }



  public getUrl(): String {
    return this.url;
  }

  public setUrl(url: String) {
    this.url = GlobalConstant.ROOT_URL + '' + url;
  }



}