import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudService } from '../../crudService/crud.service';
import { GlobalConstant } from '../../app.global.constants';
import { Devise } from './devise';

@Injectable()
export class DeviseService extends CrudService<Devise> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.setUrl(GlobalConstant.DEVISE);

  }

}