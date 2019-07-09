import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudService } from '../../crudService/crud.service';
import { GlobalConstant } from '../../app.global.constants';
import { Out } from './out';

@Injectable()
export class OutService extends CrudService<Out> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.setUrl(GlobalConstant.Out);

  }

}