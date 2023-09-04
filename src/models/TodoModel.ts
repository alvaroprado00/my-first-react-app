
class TodoModel {

    rowNumber:number;
    rowDescription:string;
    rowAssigned:string;

    constructor(number:number, description:string, assigned: string){
        this.rowNumber=number;
        this.rowDescription=description;
        this.rowAssigned=assigned;
    }
}