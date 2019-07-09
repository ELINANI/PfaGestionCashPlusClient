export class GlobalConstant {

    // ---------------------------------------------------------------------------------------------
    //                                  Configuration (LOCAL)
    // ---------------------------------------------------------------------------------------------
    static readonly ROOT_URL: String = "http://localhost:8080/cashPlus";

    static readonly  CRUD_REST_FIND_BY_ID:String= "/find-by-id";
	// Default route for get list of objects
    static   CRUD_REST_FIND_BY_CRITERE:String = "/find-by-critere";
	// Default route for save/update an object
    static readonly  CRUD_REST_SAVE_OR_UPDATE:String = "/save-or-update";
    // Default route for get all list of objects
	static readonly  CRUD_REST_FIND_ALL:String ="find-all";
    static readonly USER:String="/user"
    static readonly AUTREFAWATIR:String="/autreFawatir"
    static readonly AUTRETRANSACTION:String="/autreTransaction"
    static readonly In:String="/in"
    static readonly Out:String="/out"
    static readonly EauElectricite:String="/eauElectricite"
    static readonly DEVISE:String="/devise"

  }