import {IRequireStudent} from "./IRequireStudent";
import {IRequireUniversity} from "./IRequireUniversity";

export class AllMArksRequest implements IRequireStudent, IRequireUniversity{
    constructor(university: string, groupName: string, fullName: string) {
        this.university = university;
        this.groupName = groupName;
        this.fullName = fullName;
    }
    university: string;
    groupName: string;
    fullName: string;
}