import {IRequestDate} from "./IRequestDate";
import {IRequestUniversity} from "./IRequestUniversity";
import {IRequestGroup} from "./IRequestGroup";

export class ScheduleRequest implements IRequestGroup, IRequestUniversity, IRequestDate {
    constructor(university: string, groupName: string, date?: Date) {
        this.university = university;
        this.groupName = groupName;
        this.date = date === undefined ? new Date("2000-01-01") : date;
    }

    university: string;
    groupName: string;
    date: Date;

}