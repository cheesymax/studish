import {Period} from "./Periods";

export interface IYear {
    number : number,
    periods : Period[]
}

export class Year implements IYear {
    number: number;
    periods: Period[];

    constructor(number: number, periods: Period[]) {
        this.number = number;
        this.periods = periods;
    }
}