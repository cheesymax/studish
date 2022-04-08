import {IRequirePeriod} from "./IRequirePeriod";
import {IRequireGroup} from "./IRequireGroup";
import {IRequireStudent} from "./IRequireStudent";

export class PeriodMarksRequest implements IRequirePeriod, IRequireGroup, IRequireStudent {
    fullName: string;
    groupName: string;
    university: string;
    period: number;

    constructor(fullName: string, groupName: string, university: string, period: number) {
        this.fullName = fullName;
        this.groupName = groupName;
        this.university = university;
        this.period = period;
    }
}