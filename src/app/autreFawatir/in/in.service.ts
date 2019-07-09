import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  In } from './in';
import { CrudService } from '../../crudService/crud.service';
import { GlobalConstant } from '../../app.global.constants';

@Injectable()
export class InService extends CrudService<In> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.setUrl(GlobalConstant.In);

  }

}