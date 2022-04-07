import {YearMarksRequest} from "./YearMarksRequest";
import {IRequirePeriod} from "./IRequirePeriod";

export class PeriodMarksRequest extends YearMarksRequest implements IRequirePeriod {
    constructor(university: string, groupName: string, fullName: string, year: number, period: number) {
        super(university, groupName, fullName, year);
        this.period = period;
    }
    period: number;
}