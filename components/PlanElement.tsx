import React from "react";
import {Year} from "../models/Year";
import PeriodElement from "./PeriodElement";

export function List(props: {
    key: number | string,
    subjectName : string,
    hours : string,
    examType: string,
    className : string,
}){
    return(
        <div className={props.className}>
            <p className={'m-6'}>{props.subjectName}</p>
            <div className={'w-[2px] h-4 bg-black shrink-0 rounded-2xl'}/>
            <p>{props.hours}ч</p>
            <div className={'w-[2px] h-4 bg-black shrink-0 rounded-2xl'}/>
            <p className={'mr-6'}>{props.examType}</p>
        </div>
    )
}

export default function PlanElement(props: TermElementProps){
    return(
        <li className={'w-11/12 pb-6'}>
            <p className={'text-2xl text-center pb-6 font-medium'}>{props.data.number} год</p>
                <div className={''}>
                    {
                        props.data.periods.map((item, index) =>
                            <PeriodElement key={index}
                                           data={item}/>
                        )
                    }
                </div>
        </li>
    )
}

export interface TermElementProps{
    key? : number | string,
    data : Year,
}