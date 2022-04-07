import {IRequireDate} from "./IRequireDate";
import {IRequireUniversity} from "./IRequireUniversity";
import {IRequireGroup} from "./IRequireGroup";

export class ScheduleRequest implements IRequireGroup, IRequireUniversity, IRequireDate {
    constructor(university: string, groupName: string, date?: Date) {
        this.university = university;
        this.groupName = groupName;
        this.date = date === undefined ? new Date("2000-01-01") : date;
    }

    university: string;
    groupName: string;
    date: Date;

}