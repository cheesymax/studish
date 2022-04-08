import {PeriodMarksRequest} from "./PeriodMarksRequest";
import {IRequireSubject} from "./IRequireSubject";

export class SubjectMarksByPeriod extends PeriodMarksRequest implements IRequireSubject{
    constructor(university: string, groupName: string, fullName: string, period: number, subject: string) {
        super(university, groupName, fullName, period);
        this.subject = subject;
    }
    subject: string;
}