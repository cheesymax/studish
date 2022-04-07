import {ISubject} from "../models/Subjects";
import React from "react";

export default function SubjectElement(props: SubjectElementsProps){
    return (
        <div className={props.className}>

            <div className={'col-span-4 mr-2'}>
                <p>{props.data.subjectName}</p>
                <p className={'text-sm opacity-70'}>{props.data.teacher}</p>
            </div>
            {/*<div className={'w-[2px] h-4 bg-black shrink-0 rounded-2xl'}/>*/}
            <p className={'col-span-1 col-end-6 text-center'}>{props.data.hours}ч</p>
            {/*<div className={'w-[2px] h-4 bg-black shrink-0 rounded-2xl'}/>*/}
            <p className={'col-span-2 col-end-8 text-center'}>{props.data.examtype}</p>
        </div>
    )
}

export interface SubjectElementsProps{
    key?: number | string,
    data: ISubject,
    className : string,
}