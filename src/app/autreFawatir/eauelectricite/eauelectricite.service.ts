import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EauElectricite } from './eauelectrecite';
import { CrudService } from '../../crudService/crud.service';
import { GlobalConstant } from '../../app.global.constants';

@Injectable()
export class EauElectriciteService extends CrudService<EauElectricite> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.setUrl(GlobalConstant.EauElectricite);

  }

}