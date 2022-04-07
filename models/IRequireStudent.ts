import {IRequireUniversity} from "./IRequireUniversity";
import {IRequireGroup} from "./IRequireGroup";

export interface IRequireStudent extends IRequireGroup
{
    fullName: string;
}