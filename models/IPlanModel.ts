import {Year} from "./Year";

export interface IPlanModel {
    SpecialityName: string,
    type: string,
    form: string,
    SpecialityCode: string,
    faculty: string,
    department: string,
    periodsName : string,
    years: Year[]
}
