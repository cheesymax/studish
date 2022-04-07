import {IRequestUniversity} from "./IRequestUniversity";

export interface IRequestSpeciality extends IRequestUniversity {
    specialityCode: string;
}