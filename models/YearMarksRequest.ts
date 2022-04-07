import {IRequireYear} from "./IRequireYear";
import {AllMArksRequest} from "./allMArksRequest";

export class YearMarksRequest extends AllMArksRequest implements IRequireYear{
    constructor(university: string, groupName: string, fullName: string, year: number) {
        super(university, groupName, fullName);
        this.year = year;
    }
    year: number;
}