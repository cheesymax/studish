export interface ISubject {
    subjectName : string,
    hours : number,
    teacher : string,
    examtype : string,
}

export class Subject implements ISubject{
    constructor(examtype: string, hours: number, subjectName: string, teacher: string) {
        this.examtype = examtype;
        this.hours = hours;
        this.subjectName = subjectName;
        this.teacher = teacher;
    }
    examtype: string;
    hours: number;
    subjectName: string;
    teacher: string;
}