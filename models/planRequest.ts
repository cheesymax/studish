import {IRequestUniversity} from "./IRequestUniversity";
import {IRequestGroup} from "./IRequestGroup";
import {IRequestSpeciality} from "./IRequestSpeciality";

export class PlanRequest implements IRequestUniversity, IRequestSpeciality {

    university: string;
    specialityCode: string;

    constructor(university: string, specialityCode: string) {
        this.university = university;
        this.specialityCode = specialityCode;
    }

}