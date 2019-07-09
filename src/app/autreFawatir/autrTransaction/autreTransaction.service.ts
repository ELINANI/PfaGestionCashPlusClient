import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AutreTransaction } from './autreTransactions';
import { CrudService } from '../../crudService/crud.service';
import { GlobalConstant } from '../../app.global.constants';

@Injectable()
export class AutreTransactionService extends CrudService<AutreTransaction> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.setUrl(GlobalConstant.AUTRETRANSACTION);

  }

}