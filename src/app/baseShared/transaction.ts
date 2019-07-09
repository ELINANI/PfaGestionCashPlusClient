import { User } from "../user/owner";
import { Historized } from "./historized";

export class Transaction extends Historized{

    public borderaux: string;
    public date: any;
    public montantTransfer: any;
    public refUser: User;
    public refArchive:any;
    public isArchive:boolean;


}
