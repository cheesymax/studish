import {IRequireUniversity} from "./IRequireUniversity";
import {IRequireGroup} from "./IRequireGroup";
import {IRequireSpeciality} from "./IRequireSpeciality";

export class PlanRequest implements IRequireUniversity, IRequireSpeciality {

    university: string;
    specialityCode: string;

    constructor(university: string, specialityCode: string) {
        this.university = university;
        this.specialityCode = specialityCode;
    }

}