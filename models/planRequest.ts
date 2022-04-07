import {IRequestUniversity} from "./IRequestUniversity";
import {IRequestGroup} from "./IRequestGroup";
import {IRequestSpeciality} from "./IRequestSpeciality";

export class PlanRequest implements IRequestUniversity, IRequestGroup, IRequestSpeciality {
    constructor(groupName: string, university: string, specialityCode: string) {
        this.groupName = groupName;
        this.university = university;
        this.specialityCode = specialityCode;
    }

    groupName: string;
    university: string;
    specialityCode: string;

}