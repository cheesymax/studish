import {Subject} from "./Subjects";

export interface IPeriod {
    number : number,
    subjects : Subject[]
}

export class Period implements IPeriod {
    number: number;
    subjects: Subject[];

    constructor(number: number, subjects: Subject[]) {
        this.number = number;
        this.subjects = subjects;
    }
}