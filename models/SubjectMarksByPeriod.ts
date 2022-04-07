import {PeriodMarksRequest} from "./PeriodMarksRequest";
import {IRequireSubject} from "./IRequireSubject";

export class SubjectMarksByPeriod extends PeriodMarksRequest implements IRequireSubject{
    constructor(university: string, groupName: string, fullName: string, year: number, period: number, subject: string) {
        super(university, groupName, fullName, year, period);
        this.subject = subject;
    }
    subject: string;
}