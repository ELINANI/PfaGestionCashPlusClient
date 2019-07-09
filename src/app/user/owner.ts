import { Historized } from "../baseShared/historized";
import { Role } from "./role";




export class User extends Historized {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  tokenDate: string;
  isOnline:boolean;
  isOffline:boolean;
  refRole:Role;

 
}
